"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface BlobProps {
  color: string;
  size: number;
  initialX: number;
  initialY: number;
  duration?: number;
  mouseStrengthX?: number;
  mouseStrengthY?: number;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}

function Blob({
  color,
  size,
  initialX,
  initialY,
  duration = 20,
  mouseStrengthX = 0,
  mouseStrengthY = 0,
  sx,
  sy,
}: BlobProps) {
  const [floatPath, setFloatPath] = useState<{ x: number[]; y: number[] }>({
    x: [0, 0, 0, 0, 0],
    y: [0, 0, 0, 0, 0],
  });

  useEffect(() => {
    setFloatPath({
      x: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
      y: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
    });
  }, []);

  const mouseX = useTransform(sx, (v) => v * mouseStrengthX);
  const mouseY = useTransform(sy, (v) => v * mouseStrengthY);

  return (
    // Outer: mouse offset
    <motion.div
      className="absolute pointer-events-none z-0"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        x: mouseX,
        y: mouseY,
      }}
    >
      {/* Inner: idle float animation */}
      <motion.div
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: "blur(60px)",
          opacity: 0.4,
        }}
        animate={{
          x: floatPath.x,
          y: floatPath.y,
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

export default function FloatingBlobs() {
  const [mounted, setMounted] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.8 });

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <Blob color="rgba(124, 58, 237, 0.4)" size={600} initialX={-10} initialY={10} duration={22} mouseStrengthX={-32} mouseStrengthY={-24} sx={sx} sy={sy} />
      <Blob color="rgba(254, 215, 170, 0.5)" size={500} initialX={70} initialY={20} duration={18} mouseStrengthX={26}  mouseStrengthY={20}  sx={sx} sy={sy} />
      <Blob color="rgba(146, 39, 153, 0.3)" size={700} initialX={20} initialY={60} duration={25} mouseStrengthX={-20} mouseStrengthY={28}  sx={sx} sy={sy} />
      <Blob color="rgba(124, 58, 237, 0.2)" size={550} initialX={80} initialY={80} duration={20} mouseStrengthX={22}  mouseStrengthY={-18} sx={sx} sy={sy} />
    </div>
  );
}
