import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useTexture } from "@react-three/drei"
import { updateCountry } from '../redux/countrySlice'
import { updateNews } from '../redux/newsSlice'
import { updateStats } from '../redux/statsSlice'
import { OrbitControls} from "@react-three/drei";
import { selectRotation } from '../redux/rotationSlice'
import { selectCamera, updateCurrentPosition, updateCurve, incrementCounter } from '../redux/cameraSlice'
import { setLoadingFalse, setLoadingTrue } from '../redux/loadingSlice'
import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from '@react-three/fiber'
import { useSelector, useDispatch } from 'react-redux'
import { selectDarkMode } from '../redux/darkModeSlice'
import { selectTheme } from '../redux/themeSlice'
import { calcLatLonFromPos } from '../controllers/globeController'
import { getCountryFromProxy } from '../controllers/countryController'
import { getNewsFromProxy, getStatsFromProxy } from '../controllers/covidController'

let glow

function Scene() {
  const [isDragging, setIsDragging] = useState(false)
  const [isListeningForDrag, setIsListeningForDrag] = useState(false)
  const [markerPos, setMarkerPos] = useState({lat: 0, lon: 0 })

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

  async function fetchData(coords) {
    dispatch(setLoadingTrue())
    
    const country = await getCountryFromProxy(coords.lat, coords.lon)
   
    if (country === undefined) return

    dispatch(updateCountry(country))

    const news = await getNewsFromProxy(country.code)
    dispatch(updateNews(news))

    const stats = await getStatsFromProxy(country.code)
    dispatch(updateStats(stats))

    dispatch(setLoadingFalse())
  }

    const radius = 0.01;
    const sphereRadius = 0.0097;
    const height = 0.1;

    const material = new THREE.MeshPhongMaterial({ color: 'red' });

    const cone = new THREE.Mesh(new THREE.ConeBufferGeometry(radius, height, 8, 1, true), material);
    cone.position.y = height * 0.5;
    cone.rotation.x = Math.PI;

    const sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(sphereRadius, 16, 8), material);
    sphere.position.y = height * 0.90 + sphereRadius;
    // const group = new THREE.Group()
    // group.add(cone)
    // group.add(sphere)
    // globe.add(marker)

    const marker = new THREE.Object3D()
    marker.add(cone)
    marker.add(sphere)
    console.log(scene.children)
    globe.add(marker)

  function Marker() {

    var radius = 0.01;
    var sphereRadius = 0.0097;
    var height = 0.1;

    var material = new THREE.MeshPhongMaterial({ color: 'red' });

    var cone = new THREE.Mesh(new THREE.ConeBufferGeometry(radius, height, 8, 1, true), material);
    cone.position.y = height * 0.5;
    cone.rotation.x = Math.PI;

    var sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(sphereRadius, 16, 8), material);
    sphere.position.y = height * 0.90 + sphereRadius;
    // const group = new THREE.Group()
    // group.add(cone)
    // group.add(sphere)

    const marker = new THREE.Object3D()
    marker.add(cone)
    marker.add(sphere)

    return marker
}

  function createMarker() {
    var marker = new Marker();

    var latRad = markerPos.lat * (Math.PI / 180);
    var lonRad = -markerPos.lon * (Math.PI / 180);
    var r = 1;
    // 

    // console.log(marker)

    marker.position.set(Math.cos(latRad) * Math.cos(lonRad) * r, Math.sin(latRad) * r, Math.cos(latRad) * Math.sin(lonRad) * r);
    marker.rotation.set(0.0, -lonRad, latRad - Math.PI * 0.5);

    // setMarker(marker)
    globe.add(marker)
    // console.log(marker)
  }

  function handleClick(e) {
    e.stopPropagation()

    const {x, y, z} = e.intersections[0].point

    const coords = calcLatLonFromPos(x,y,z)
    
    // createPoint(coords.lat, coords.lon)

    // fetchData(coords)
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
          <meshPhongMaterial {...props}  bumpScale={.002} color={customTheme} transparent={true} alphaTest={.05} opacity={1} depthWrite={true} depthTest={true}/>
       </mesh>
       <OrbitControls autoRotate={isRotating} autoRotateSpeed={.75} enableZoom={!false} enablePan={false}/>
    </>
  )
}

export default Scene