import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import { useSpring, animated, config } from '@react-spring/three'
import { useTexture } from "@react-three/drei"
import { updateCountry } from '../redux/countrySlice'
import { updateNews } from '../redux/newsSlice'
import { updateStats } from '../redux/statsSlice'
import { selectCamera, updatePosition } from '../redux/cameraSlice'
import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from '@react-three/fiber'
import { useSelector, useDispatch } from 'react-redux'
import { selectDarkMode } from '../redux/darkModeSlice'
import { selectTheme } from '../redux/themeSlice'
const countryController = require('../controllers/countryController')
const covidController = require('../controllers/covidController')

const { getCountryFromProxy } = countryController

const { getNewsFromProxy, getStatsFromProxy } = covidController

export function calcPosFromLatLon(lat, lon) {
  const phi = (90 - lat)*(Math.PI/180)
  const theta = (lon +180)*(Math.PI/180)

  const x = -(Math.sin(phi)*Math.cos(theta))
  const z = (Math.sin(phi)*Math.sin(theta))
  const y = (Math.cos(phi))

  return {x,y,z}
}

function Scene() {
  const [isDragging, setIsDragging] = useState(false)
  const [isListeningForDrag, setIsListeningForDrag] = useState(false)
  const dispatch = useDispatch()
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)
  const camPos = useSelector(selectCamera)
  const camVector = new THREE.Vector3(camPos[0],camPos[1],camPos[2])

  const props = useTexture({
    map: darkMode ? 'darkmap.jpg' : 'lightmap.jpg',
    bumpMap: 'earth_bumpmap.jpg',
    alphaMap: 'earthspec1k.jpg',
  })

  const globeRef = useRef()
  const cam = useRef()

  const { scene, camera } = useThree()

  const globe = scene.children[3]
  
  //Add sprite for glow
  const spriteMaterial = new THREE.SpriteMaterial( 
    {  
      map: new THREE.TextureLoader().load('glow.png'),
      alphaMap: new THREE.TextureLoader().load('glow.png'),
      color: customTheme,
      transparent: true, 
      blending: THREE.AdditiveBlending,
    });

  function handleDrag(e) {
    setIsDragging(true)
    e.stopPropagation()
  }

  function addDragListnener() {
    setIsListeningForDrag(true)
  }
  
  function removeDragListener() {
    setIsListeningForDrag(false)
    setIsDragging(false)
  }

  function calcLatLonFromPos(x,y,z) {
    const phi = Math.acos(y)
    let lat = -(phi/(Math.PI/180)) + 90
    let lon = ((Math.acos(-(x/Math.sin(phi)))/(Math.PI/180)) - 180)

    //if pos is on eastern hemisphere, reverse longitude
    if(Math.sign(z) === -1) {
      lon = -lon
    } 

    const coordinates = {
      lat,
      lon
    }
    return coordinates
  }

  function rotateGlobe(lat, lon) {
    const c = calcPosFromLatLon(lat, lon)

    const point = new THREE.Vector3(c.x,c.y,c.z)

    const coeff = 1 + (1.75/1)

    const newPos = [point.x * coeff, point.y * coeff, point.z * coeff]
    dispatch(updatePosition(newPos)) 
  }

  useFrame(() => {
    // globe.rotation.y += .002
    cam.current.position.lerp(camVector, 0.05)
    camera.lookAt(new THREE.Vector3(0,0,0))
  })

  async function handleClick(e) {
    e.stopPropagation()
    
    const {x, y, z} = e.intersections[0].point

    const coords = calcLatLonFromPos(x,y,z)

  }

  return (
      <>
       <PerspectiveCamera makeDefault fov={50} position={[0,0,-2.75]} ref={cam}>
         <directionalLight intensity={1} position={[-4,4,0]}/>
       </PerspectiveCamera>
       <ambientLight intensity={.1}/>
       <sprite scale={[3.85,3.85,1]} >
          <spriteMaterial {...spriteMaterial} />
       </sprite>
       <mesh ref={globeRef} name={'earth'} onClick={isDragging ? null :  e => handleClick(e)} onPointerMove={isListeningForDrag ? e => handleDrag(e) : null} onPointerDown={addDragListnener} onPointerUp={removeDragListener}>
          <sphereGeometry args={[1, 100, 100]}/>
          <meshPhongMaterial {...props}  bumpScale={.002} color={customTheme} transparent={true} alphaTest={.05} opacity={1} depthWrite={false} depthTest={false}/>
       </mesh>
    </>
  )
}

export default Scene