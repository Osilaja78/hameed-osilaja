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
        <Canvas className="bg-black ml-10" style={{ width: "100%", height: "70vh"}}>
            <OrbitControls enableZoom={false}/>
            <ambientLight position={[0, 10, 10]} intensity={1}/>
            <directionalLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>
                <Sphere visible args={[1, 100, 200]} scale={2}>
                    <MeshDistortMaterial 
                        color="#8352fd"
                        attach="material"
                        distort={0.5}
                        speed={2}
                        roughness={0}
                    />
                </Sphere>
            </Suspense>
        </Canvas>
    )
}