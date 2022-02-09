import React from 'react'
import * as THREE from 'three'

function Marker() {

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

    const marker = new THREE.Object3D()
    marker.add(cone)
    marker.add(sphere)

    return (
        <>
            <group>
                <mesh>
                    <sphereBufferGeometry sphereRadius={sphereRadius} widthSegments={16} heightSegments={8} positionY={height * 0.90 + sphereRadius} />
                    <meshPhongMaterial  color={'red'} />
                </mesh>
                <mesh>
                    <coneBufferGeometry radius={radius} height={height} radialSegments={8} heightSegments={1} openEnded={true} />
                    <meshPhongMaterial  color={'red'} />
                </mesh>
            </group>
        </>
    )
}

export default Marker