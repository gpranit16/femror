'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface FinancialNetworkCanvasProps {
  activeHighlight?: string | null;
}

export function FinancialNetworkCanvas({ activeHighlight }: FinancialNetworkCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile or reduced motion
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 85;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Node data setup (42 nodes)
    const nodeCount = 42;
    const nodePositions: THREE.Vector3[] = [];
    const nodeCategories: string[] = ['assets', 'investments', 'goals', 'cash', 'income', 'debt'];
    const nodeData: { position: THREE.Vector3; basePos: THREE.Vector3; category: string; speed: number; phase: number }[] = [];

    // Colors
    const mintColor = new THREE.Color('#7CFF9B');
    const forestColor = new THREE.Color('#1B533E');
    const warmColor = new THREE.Color('#D6C9A8');
    const whiteColor = new THREE.Color('#F7F8F4');

    // Create Nodes geometry
    const nodesGroup = new THREE.Group();
    const spheres: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const radius = 35 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      const x = radius * Math.cos(theta) * Math.cos(phi) + 15; // Shift slightly to right
      const y = radius * Math.sin(phi);
      const z = (Math.random() - 0.5) * 30;

      const pos = new THREE.Vector3(x, y, z);
      const cat = nodeCategories[i % nodeCategories.length];
      const speed = 0.0008 + Math.random() * 0.0012;
      const phase = Math.random() * Math.PI * 2;

      nodePositions.push(pos);
      nodeData.push({ position: pos, basePos: pos.clone(), category: cat, speed, phase });

      const size = i % 5 === 0 ? 0.9 : i % 3 === 0 ? 0.65 : 0.45;
      const geom = new THREE.SphereGeometry(size, 8, 8);
      const mat = new THREE.MeshBasicMaterial({
        color: cat === 'investments' || cat === 'assets' ? mintColor : cat === 'goals' ? warmColor : forestColor,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.copy(pos);
      spheres.push(mesh);
      nodesGroup.add(mesh);
    }
    scene.add(nodesGroup);

    // Connecting Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: mintColor,
      transparent: true,
      opacity: 0.14,
      linewidth: 1,
    });

    const linesGroup = new THREE.Group();
    const maxDistance = 26;

    // Line segments
    const lineIndices: [number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxDistance) {
          lineIndices.push([i, j]);
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    const positionsArray = new Float32Array(lineIndices.length * 2 * 3);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    linesGroup.add(linesMesh);
    scene.add(linesGroup);

    // Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 3.5;
      targetMouseY = y * 2.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping (2-4% parallax)
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      nodesGroup.position.x = currentMouseX;
      nodesGroup.position.y = currentMouseY;
      linesGroup.position.x = currentMouseX;
      linesGroup.position.y = currentMouseY;

      // Slow orbital micro-motion
      nodesGroup.rotation.y = elapsedTime * 0.02;
      linesGroup.rotation.y = elapsedTime * 0.02;

      // Update positions
      for (let i = 0; i < nodeCount; i++) {
        const data = nodeData[i];
        const offset = Math.sin(elapsedTime * 0.8 + data.phase) * 1.5;
        data.position.y = data.basePos.y + offset;
        spheres[i].position.copy(data.position);
      }

      // Update lines buffer
      const posAttr = linesGeometry.attributes.position as THREE.BufferAttribute;
      let ptr = 0;
      for (let k = 0; k < lineIndices.length; k++) {
        const [i, j] = lineIndices[k];
        const p1 = nodeData[i].position;
        const p2 = nodeData[j].position;

        posAttr.setXYZ(ptr++, p1.x, p1.y, p1.z);
        posAttr.setXYZ(ptr++, p2.x, p2.y, p2.z);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
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
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Lightweight SVG network fallback on mobile */}
      {isMobile && (
        <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
          <circle cx="80" cy="120" r="4" fill="#7CFF9B" />
          <circle cx="220" cy="90" r="5" fill="#7CFF9B" />
          <circle cx="310" cy="180" r="4" fill="#D6C9A8" />
          <circle cx="160" cy="240" r="6" fill="#7CFF9B" />
          <circle cx="280" cy="310" r="4" fill="#1B533E" />
          <line x1="80" y1="120" x2="220" y2="90" stroke="#7CFF9B" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="220" y1="90" x2="310" y2="180" stroke="#7CFF9B" strokeWidth="1" />
          <line x1="220" y1="90" x2="160" y2="240" stroke="#7CFF9B" strokeWidth="1" />
          <line x1="160" y1="240" x2="280" y2="310" stroke="#7CFF9B" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      )}
    </div>
  );
}
