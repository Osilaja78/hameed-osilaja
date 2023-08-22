"use client"
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";
import { extend } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import texture from "../public/textures/new_texture.png";
import {
    BoxGeometry, MeshStandardMaterial,
    AmbientLight, DirectionalLight,
    MeshLambertMaterial
} from "three";
extend({ BoxGeometry, MeshStandardMaterial, MeshLambertMaterial, AmbientLight, DirectionalLight })


export default function BoxComponent() {

    return (
        <Canvas className="bg-black min-h-[100vh]">
            <OrbitControls />
            <mesh rotation={[90, 0, 20]}>
                <boxGeometry attach="geometry" args={[3, 3, 3]} />
                {/* <meshStandardMaterial map={materialMap} /> */}
                <meshLambertMaterial color="green" />
                <ambientLight intensity={1} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
            </mesh>
        </Canvas>
    )
}