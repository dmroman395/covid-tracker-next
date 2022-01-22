import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useTexture } from "@react-three/drei"
import { updateCountry } from '../redux/countrySlice'
import { updateNews } from '../redux/newsSlice'
import { updateStats } from '../redux/statsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { selectDarkMode } from '../redux/darkModeSlice'
import { selectTheme } from '../redux/themeSlice'
const countryController = require('../controllers/countryController')
const covidController = require('../controllers/covidController')

const { getCountryFromProxy} = countryController

const { getNewsFromProxy, getStatsFromProxy } = covidController

function Scene() {
  const [isDragging, setIsDragging] = useState(false)
  const [isListeningForDrag, setIsListeningForDrag] = useState(false)
  const dispatch = useDispatch()
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)

  const props = useTexture({
    map: darkMode ? 'darkmap.jpg' : 'lightmap.jpg',
    bumpMap: 'earth_bumpmap.jpg',
    alphaMap: 'earthspec1k.jpg',
  })

  const globeRef = useRef()
  
  //Add sprite for glow
  const spriteMaterial = new THREE.SpriteMaterial( 
    {  
      map: new THREE.TextureLoader().load('glow.png'),
      alphaMap: new THREE.TextureLoader().load('glow.png'),
      color: customTheme,
      transparent: true, 
      blending: THREE.AdditiveBlending,
    });

    function handleDrag() {
      setIsDragging(true)
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

      //if pos is on eastern hemisphere, reverse that longitude
      if(Math.sign(z) === -1) {
        lon = -lon
      } 
      const coordinates = {
        lat,
        lon
      }
      return coordinates
    }

    async function handleClick(e) {
      e.stopPropagation()
      
      const {x, y, z} = e.intersections[0].point
      const coords = calcLatLonFromPos(x,y,z)

      const country = await getCountryFromProxy(coords.lat, coords.lon)
      dispatch(updateCountry(country))

      const news = await getNewsFromProxy(country.code)
      dispatch(updateNews(news))

      const stats = await getStatsFromProxy(country.code)
      dispatch(updateStats(stats))
      
    }

  return (
      <>
        <ambientLight intensity={.1}/>
        <sprite scale={[3.85,3.85,1]} >
              <spriteMaterial {...spriteMaterial} />
        </sprite>
        <mesh ref={globeRef} name={'earth'} onClick={isDragging ? null :  e => handleClick(e)} onPointerMove={isListeningForDrag ? handleDrag : null} onPointerDown={addDragListnener} onPointerUp={removeDragListener}>
            <sphereGeometry args={[1, 100, 100]}/>
            <meshPhongMaterial {...props}  bumpScale={.002} color={customTheme} transparent={true} alphaTest={.05} opacity={1} depthWrite={false} depthTest={false}/>
        </mesh>
    </>
  )
}

export default Scene