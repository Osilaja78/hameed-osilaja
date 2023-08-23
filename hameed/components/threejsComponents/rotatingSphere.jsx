"use client"
import React, {Suspense, useEffect, useState} from "react";
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

    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (window.innerWidth > 600) {
            setScale(2);
        } else {
            setScale(1.5);
        }

        const handleResize = () => {
            if (window.innerWidth > 600) {
                setScale(2);
            } else {
                setScale(1.5);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <Canvas className="bg-black " style={{ width: "100%", height: "70vh"}}>
            <OrbitControls enableZoom={false} autoRotate rotateSpeed={6} />
            <ambientLight position={[0, 10, 10]} intensity={0.1}/>
            <directionalLight position={[50, 50, 150]} intensity={2}/>
            <Suspense fallback={null}>
                <Sphere visible args={[1, 100, 200]} scale={scale}>
                    <meshLambertMaterial color="#cd3636"/>
                </Sphere>
            </Suspense>
        </Canvas>
    )
}
