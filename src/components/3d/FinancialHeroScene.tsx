'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface FinancialHeroSceneProps {
  onNodeHover?: (node: string | null) => void;
}

export function FinancialHeroScene({ onNodeHover }: FinancialHeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 580;
    const height = container.clientHeight || 520;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    // 2. High-performance Antialiased WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Dynamic Lighting System
    const ambientLight = new THREE.AmbientLight(0x0e3529, 2.5);
    scene.add(ambientLight);

    const mainMintLight = new THREE.PointLight(0x7CFF9B, 4.5, 50);
    mainMintLight.position.set(10, 12, 15);
    scene.add(mainMintLight);

    const accentGoldLight = new THREE.PointLight(0xD6C9A8, 3.0, 40);
    accentGoldLight.position.set(-12, -8, 10);
    scene.add(accentGoldLight);

    const backRimLight = new THREE.DirectionalLight(0x7CFF9B, 1.8);
    backRimLight.position.set(0, 15, -10);
    scene.add(backRimLight);

    // 4. Central 3D Wealth Monolith (Multifaceted Precision Core)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Solid Faceted Gem
    const innerGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x0B2A20,
      emissive: 0x071D16,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer Mint Wireframe Cage (Precision Math Grid)
    const wireGeo = new THREE.IcosahedronGeometry(4.35, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x7CFF9B,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Outer Orbital Rings (Financial Gyroscope)
    const ring1Geo = new THREE.TorusGeometry(6.4, 0.06, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x7CFF9B,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0A7A3E,
      emissiveIntensity: 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(7.6, 0.05, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xD6C9A8,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 5. Floating Financial Satellite Nodes (Assets, SIP, Nifty, Goals)
    const satellitesGroup = new THREE.Group();
    coreGroup.add(satellitesGroup);

    const satelliteData = [
      { label: 'INVEST', radius: 8.5, angle: 0, speed: 0.008, color: 0x7CFF9B, size: 0.45 },
      { label: 'ASSETS', radius: 9.2, angle: Math.PI * 0.5, speed: 0.006, color: 0x7CFF9B, size: 0.5 },
      { label: 'SIP', radius: 7.8, angle: Math.PI * 1.1, speed: 0.01, color: 0xD6C9A8, size: 0.4 },
      { label: 'GOALS', radius: 8.8, angle: Math.PI * 1.6, speed: 0.007, color: 0x7CFF9B, size: 0.45 },
    ];

    const satelliteMeshes: { mesh: THREE.Mesh; data: typeof satelliteData[0] }[] = [];

    satelliteData.forEach((sat) => {
      const sGeo = new THREE.SphereGeometry(sat.size, 16, 16);
      const sMat = new THREE.MeshStandardMaterial({
        color: sat.color,
        emissive: sat.color,
        emissiveIntensity: 0.6,
        metalness: 0.9,
        roughness: 0.1,
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      satellitesGroup.add(sMesh);
      satelliteMeshes.push({ mesh: sMesh, data: sat });
    });

    // 6. Floating Ambient Dust / Data Tokens
    const particleCount = 60;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 28;
      pPos[i + 1] = (Math.random() - 0.5) * 24;
      pPos[i + 2] = (Math.random() - 0.5) * 20;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x7CFF9B,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    setIsLoaded(true);

    // 7. Mouse and Scroll Physics Interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollRotation = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.6;

      // Move main light with mouse for dynamic metallic specular reflections
      mainMintLight.position.x = 10 + x * 15;
      mainMintLight.position.y = 12 + y * 15;
    };

    const handleScroll = () => {
      scrollRotation = window.scrollY * 0.0025;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 8. 60FPS RAF Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const elapsed = clock.getElapsedTime();

      // Smooth camera and rotation damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreGroup.rotation.y = elapsed * 0.25 + scrollRotation + mouseX * 0.5;
      coreGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.15 + mouseY * 0.5;
      coreGroup.rotation.z = Math.cos(elapsed * 0.15) * 0.08;

      ring1.rotation.z = elapsed * 0.4;
      ring2.rotation.z = -elapsed * 0.3;

      // Update satellite orbits
      satelliteMeshes.forEach(({ mesh, data }) => {
        data.angle += data.speed;
        mesh.position.x = Math.cos(data.angle) * data.radius;
        mesh.position.y = Math.sin(data.angle * 0.8) * (data.radius * 0.4);
        mesh.position.z = Math.sin(data.angle) * data.radius;
      });

      // Ambient particle drift
      particles.rotation.y = elapsed * 0.04;

      renderer.render(scene, camera);
    };

    render();

    // 9. Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[580px] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing select-none"
    >
      {/* 3D Visual Label Overlay */}
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[rgba(14,53,41,0.85)] border border-[rgba(124,255,155,0.3)] backdrop-blur-md flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] animate-ping" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--mint)] font-bold">
          3D WEALTH CORE · INTERACTIVE
        </span>
      </div>

      {/* Interactive Drag Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[10px] font-mono text-[var(--mineral)]/60 bg-[rgba(11,42,32,0.7)] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)] pointer-events-none">
        Move mouse / scroll to rotate 3D financial engine
      </div>
    </div>
  );
}
