// ModelViewer.tsx
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ModelViewer: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        loader.load('./matilda.glb', (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (error) => {
            console.error('Error loading glb model:', error);
        });

        camera.position.z = 250;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    return null; // Return null to avoid rendering any visible content
};

export default ModelViewer;
