"use client"
import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { extend } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

import {
    MeshStandardMaterial,
    AmbientLight, DirectionalLight,
    MeshLambertMaterial
} from "three";
extend({ MeshStandardMaterial, MeshLambertMaterial, AmbientLight, DirectionalLight })


export default function SphereComponent() {
    return (
        <Canvas className="bg-black ml-20" style={{ width: "100%", height: "70vh"}}>
            <OrbitControls enableZoom={false} autoRotate rotateSpeed={5}/>
            <ambientLight position={[0, 10, 10]} intensity={0.5}/>
            <directionalLight position={[50, 50, 150]} intensity={2}/>
            <Suspense fallback={null}>
                <Sphere visible args={[1, 100, 200]} scale={2}>
                    <MeshDistortMaterial 
                        color="#7e22ce"
                        attach="material"
                        distort={0.2}
                        speed={2}
                        roughness={0}
                    />
                </Sphere>
            </Suspense>
        </Canvas>
    )
}