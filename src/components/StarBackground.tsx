import { Canvas } from "@react-three/fiber";
import { Cloud, Sparkles, Stars } from "@react-three/drei";
import { Suspense } from "react";

interface StarBackgroundProps {
  intensity?: number;
  showStars?: boolean;
  showSparkles?: boolean;
  showCloud?: boolean;
  zIndex?: number;
  opacity?: number;
}

export function StarBackground({
  intensity = 1,
  showStars = true,
  showSparkles = true,
  showCloud = true,
  zIndex = -1,
  opacity = 1,
}: StarBackgroundProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex, opacity }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
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
