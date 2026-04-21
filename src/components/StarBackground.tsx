import { Canvas } from "@react-three/fiber";
import { Cloud, Sparkles, Stars } from "@react-three/drei";
import { Suspense, useState } from "react";

interface StarBackgroundProps {
  intensity?: number;
  showStars?: boolean;
  showSparkles?: boolean;
  showCloud?: boolean;
  zIndex?: number;
  opacity?: number;
  onReady?: () => void;
}

export function StarBackground({
  intensity = 1,
  showStars = true,
  showSparkles = true,
  showCloud = true,
  zIndex = -1,
  opacity = 1,
  onReady,
}: StarBackgroundProps) {
  const [canvasReady, setCanvasReady] = useState(false);

  const handleCanvasReady = () => {
    if (canvasReady) return;
    setCanvasReady(true);
    onReady?.();
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex,
        opacity,
        background:
          "radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.22), transparent 50%), radial-gradient(circle at 20% 80%, rgba(192, 132, 252, 0.14), transparent 45%), #050208",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          opacity: canvasReady ? 0 : 1,
          transition: "opacity 350ms ease",
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.9), transparent), radial-gradient(1px 1px at 75% 25%, rgba(255,255,255,.8), transparent), radial-gradient(1px 1px at 45% 70%, rgba(255,255,255,.7), transparent), radial-gradient(1px 1px at 88% 65%, rgba(255,255,255,.75), transparent), radial-gradient(1px 1px at 12% 82%, rgba(255,255,255,.6), transparent)",
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 1] }}
        className={
          canvasReady
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 transition-opacity duration-500"
        }
        onCreated={handleCanvasReady}
      >
        <Suspense fallback={null}>
          {showStars && (
            <Stars
              radius={100}
              count={Math.floor(2000 * intensity)}
              factor={4}
              fade
              speed={1.5 * intensity}
            />
          )}

          {showSparkles && (
            <Sparkles
              count={Math.floor(100 * intensity)}
              scale={10}
              size={1.5}
              speed={0.2 * intensity}
              color="#a855f7"
            />
          )}

          {showCloud && (
            <Cloud
              opacity={0.5 * intensity}
              speed={0.2 * intensity}
              bounds={[10, 1, 1.5]}
              segments={15}
              color="#6d28d9"
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
