"use client"
import React from "react";
import { Canvas } from "@react-three/fiber";
import { extend } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import {
    BoxGeometry, MeshStandardMaterial,
    AmbientLight, DirectionalLight,
    MeshLambertMaterial
} from "three";
extend({ BoxGeometry, MeshStandardMaterial, MeshLambertMaterial, AmbientLight, DirectionalLight })


export default function BoxComponent() {

    return (
        <Canvas className="bg-black min-h-[50vh]">
            <OrbitControls enableZoom={false} autoRotate />
            <mesh rotation={[90, 0, 20]}>
                <boxGeometry attach="geometry" args={[3, 3, 3]} />
                <meshLambertMaterial color="#8352fd" />
                <ambientLight intensity={1} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
            </mesh>
        </Canvas>
    )
}