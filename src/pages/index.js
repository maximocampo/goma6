import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { TextureLoader } from 'three'
import imgsrc from '../txt.png'
import {OrbitControls} from "@react-three/drei";

function MyImage({ imageUrl }) {
    
    return (
        <mesh>
            <planeGeometry
                width={2000}
                height={1000}
            />
            <meshStandardMaterial
                map={new TextureLoader().load(imgsrc)}
                metalness={0.5}
                roughness={0.5}
            />
        </mesh>
    )
}
function App() {
    return (
        <Canvas style={{width: '100vw', height: '100vh'}}>
            <MyImage imageUrl={imgsrc} />
            <OrbitControls />
        </Canvas>
    )
}

export default App
