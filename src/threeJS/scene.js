import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useTexture } from "@react-three/drei"
import { updateCountry } from '../redux/countrySlice'
import { updateNews } from '../redux/newsSlice'
import { updateStats } from '../redux/statsSlice'
import { OrbitControls} from "@react-three/drei";
import { selectRotation } from '../redux/rotationSlice'
import { selectCamera, updateCurrentPosition, updateCurve, incrementCounter } from '../redux/cameraSlice'
import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from '@react-three/fiber'
import { useSelector, useDispatch } from 'react-redux'
import { selectDarkMode } from '../redux/darkModeSlice'
import { selectTheme } from '../redux/themeSlice'
const countryController = require('../controllers/countryController')
const covidController = require('../controllers/covidController')

const { getCountryFromProxy } = countryController

const { getNewsFromProxy, getStatsFromProxy } = covidController

let glow

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
  const isRotating = useSelector(selectRotation)

  useEffect(() => {
    glow = new THREE.TextureLoader().load('glow.png')
  }, [])

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
      map: glow,
      alphaMap: glow,
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

  useFrame(() => {
    if(camPos.counter <= camPos.curveArr.length && camPos.curveArr.length > 0) {
      if (camPos.counter > camPos.curveArr.length - 1) {
        dispatch(updateCurve([]))
        return
      }
      const x = camPos.curveArr[camPos.counter][0]
      const y = camPos.curveArr[camPos.counter][1]
      const z = camPos.curveArr[camPos.counter][2]

      const currVec = new THREE.Vector3(x,y,z)

      cam.current.position.lerp(currVec, 0.15)
      const updatedPos = [cam.current.position.x, cam.current.position.y, cam.current.position.z]
      dispatch(updateCurrentPosition(updatedPos))
      dispatch(incrementCounter())
    }
    camera.lookAt(globe.position)
  })

  function handleClick(e) {
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
       <sprite scale={[4,4,1]} >
          <spriteMaterial {...spriteMaterial} />
       </sprite>
       <mesh ref={globeRef} name={'earth'} onClick={isDragging ? null :  e => handleClick(e)} onPointerMove={isListeningForDrag ? e => handleDrag(e) : null} onPointerDown={addDragListnener} onPointerUp={removeDragListener}>
          <sphereGeometry args={[1, 100, 100]}/>
          <meshPhongMaterial {...props}  bumpScale={.002} color={customTheme} transparent={true} alphaTest={.05} opacity={1} depthWrite={false} depthTest={false}/>
       </mesh>
       <OrbitControls autoRotate={isRotating} autoRotateSpeed={.75} enableZoom={false} enablePan={false}/>
    </>
  )
}

export default Scene