import { useEffect } from "react";
import * as THREE from "three";

import WebGL from "three/addons/capabilities/WebGL.js";

const ThreeDotJS_Practice = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  useEffect(() => {
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    function animate() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    if (WebGL.isWebGLAvailable()) {
      // Initiate function or other initializations here
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      console.log(warning);
    }

    // Clean up
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  const lineScene = new THREE.Scene();

  const lineCamera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  lineCamera.position.set(0, 0, 100);
  lineCamera.lookAt(0, 0, 0);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const linePoints = [];
  linePoints.push(new THREE.Vector3(-10, 0, 0));
  linePoints.push(new THREE.Vector3(0, 10, 0));
  linePoints.push(new THREE.Vector3(10, 0, 0));

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
  const line = new THREE.Line(lineGeometry, lineMaterial);

  
  const lineRenderer = new THREE.WebGLRenderer();
  lineRenderer.setSize(window.innerWidth, window.innerHeight);
  
  lineScene.add(line);
  lineRenderer.render(lineScene, lineCamera);
  
  useEffect(() => {
    document.body.appendChild(lineRenderer.domElement);
  }, []);

  return<></>
};

export default ThreeDotJS_Practice;
