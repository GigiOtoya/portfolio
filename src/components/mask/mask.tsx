"use client";
import { useEffect, useRef } from "react";

export default function Mask() {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (maskRef.current) {
        maskRef.current.style.left = `${e.clientX}px`;
        maskRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={maskRef}
      className="min-w-96 min-h-96 fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
      style={{
        background: "radial-gradient(180px, rgba(255,255,255,0.075), transparent)",
      }}
    ></div>
  );
}
