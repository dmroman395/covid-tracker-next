import React, { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './scene'
import { Provider } from 'react-redux';
import store from '../redux/store';


function GlobeContainer() {
  return (
    <Provider store={store}>
      <Canvas>
        <Suspense fallback={null}>
          <Provider store={store}>
            <Scene/>
          </Provider>
        </Suspense>
      </Canvas>
    </Provider>
  )
}

export default GlobeContainer