import { useEffect, useRef } from "react";

interface TechBackgroundProps {
  intensity?: number;
  zIndex?: number;
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const PARTICLE_COLOR = "56, 189, 248";
const LINK_DISTANCE = 140;

export function TechBackground({
  intensity = 1,
  zIndex = -1,
  opacity = 1,
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrame = 0;

    function resize() {
      const canvasEl = canvas;
      if (!canvasEl) return;

      width = canvasEl.width = canvasEl.offsetWidth;
      height = canvasEl.height = canvasEl.offsetHeight;

      const count = Math.min(90, Math.floor(((width * height) / 18000) * intensity));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    }

    function step() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${0.14 * (1 - distance / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const particle of particles) {
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.65)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(step);
    }

    resize();
    step();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [intensity]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex, opacity }}
    >
      <div className="absolute inset-0 bg-background" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(56, 189, 248, 0.18)" }}
      />
      <div
        className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(52, 211, 153, 0.12)" }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
