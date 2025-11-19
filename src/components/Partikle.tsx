'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseX: number;
  baseY: number;
  density: number;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, lastMove: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Increased density for "intensity"
      const particleCount = Math.min(window.innerWidth * 0.15, 250);

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 2, // Higher initial velocity
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1, // Slightly larger
          color: `rgba(${100 + Math.random() * 100}, ${
            150 + Math.random() * 105
          }, 255, ${Math.random() * 0.6 + 0.4})`, // Brighter blue/cyan
          density: Math.random() * 30 + 1,
        });
      }
    };

    const updateParticles = () => {
      // Use a slight trail effect for "smoothness" but clear enough to not be messy
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // Partial clear for trails? No, user wants "clean".
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Additive blending for "glowing" effect
      ctx.globalCompositeOperation = 'lighter';

      const isIdle = Date.now() - mouseRef.current.lastMove > 2000;

      particles.forEach((p) => {
        // Physics
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Interaction radius
        const forceDistance = 200;
        const force = (forceDistance - distance) / forceDistance;
        const angle = Math.atan2(dy, dx);

        if (distance < forceDistance && mouseRef.current.active) {
          if (isIdle) {
            // Scatter! Repel from the last known mouse position
            const moveX = Math.cos(angle) * force * -5; // Strong negative force
            const moveY = Math.sin(angle) * force * -5;
            p.vx += moveX;
            p.vy += moveY;
          } else {
            // Attract
            // Attraction but with a "buffer" to prevent clumping
            // If too close (< 50), push away (negative force) or orbit
            const direction = distance < 50 ? -1 : 1;

            const moveX = Math.cos(angle) * force * direction * 2;
            const moveY = Math.sin(angle) * force * direction * 2;

            p.vx += moveX;
            p.vy += moveY;
          }
        }

        // Add some random noise so they don't freeze
        p.vx += (Math.random() - 0.5) * 0.1;
        p.vy += (Math.random() - 0.5) * 0.1;

        // Friction
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Soft boundaries (bounce)
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw connections (optimized)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 150, 255, ${
              0.2 * (1 - distance / 100)
            })`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalCompositeOperation = 'source-over'; // Reset
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
        lastMove: Date.now(),
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    updateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-white"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Particles;
