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


export default function RotatingSphereComponent() {

    return (
        <Canvas className="bg-black " style={{ width: "100%", height: "70vh"}}>
            <OrbitControls enableZoom={false} autoRotate rotateSpeed={6} />
            <ambientLight position={[0, 10, 10]} intensity={0.1}/>
            <directionalLight position={[50, 50, 150]} intensity={2}/>
            <Suspense fallback={null}>
                <Sphere visible args={[1, 100, 200]} scale={window.innerWidth > 600 ? 2 : 1.5}>
                    <meshLambertMaterial color="#cd3636"/>
                </Sphere>
            </Suspense>
        </Canvas>
    )
}
