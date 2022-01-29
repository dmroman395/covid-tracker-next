import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { selectCamera } from '../redux/cameraSlice';
import Scene from './scene'
import { Provider, useSelector } from 'react-redux';
import store from '../redux/store';
import { useThree, useFrame } from '@react-three/fiber'

function GlobeContainer() {
  return (
    <Provider store={store}>
      <Canvas>
        <Suspense fallback={null}>
          <Provider store={store}>
            <Scene/>
          </Provider>
        </Suspense>
        {/* <OrbitControls autoRotate autoRotateSpeed={.5} enableZoom={true} enablePan={true} /> */}
      </Canvas>
    </Provider>
  )
}

export default GlobeContainer