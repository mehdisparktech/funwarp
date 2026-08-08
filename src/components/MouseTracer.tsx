"use client";

import { useEffect, useRef, useState } from "react";

export function MouseTracer() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer || reduceMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-mouse-tracer");

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        visible = true;
        ring.x = mouse.x;
        ring.y = mouse.y;
      }
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onEnter = () => {
      visible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const tick = () => {
      // Inner square: exact follow
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.opacity = visible ? "1" : "0";
      }

      // Outer square: smooth lag
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.opacity = visible ? "1" : "0";
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-mouse-tracer");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block" aria-hidden>
      {/* Outer hollow square */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 h-9 w-9 border border-[#5a5f66] opacity-0 will-change-transform"
      />
      {/* Inner solid cyan square */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-2 w-2 bg-[#3de7ff] opacity-0 will-change-transform"
      />
    </div>
  );
}
