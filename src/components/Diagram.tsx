import type { CSSProperties } from "react";
import { copy } from "../data/copy";
import type { DiagramSpec } from "../data/types";
import { useLanguage } from "../context/language";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

const COLUMNS = [16, 272, 528];
const NODE_WIDTH = 176;
const NODE_HEIGHT = 54;
const ROW_GAP = 83;
const TOP = 20;

type Point = { x: number; y: number };

function edgePath(from: Point, to: Point) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  if (Math.abs(dx) >= Math.abs(dy) && dx !== 0) {
    const forward = dx > 0;
    const ax = forward ? from.x + NODE_WIDTH : from.x;
    const bx = forward ? to.x : to.x + NODE_WIDTH;
    const ay = from.y + NODE_HEIGHT / 2;
    const by = to.y + NODE_HEIGHT / 2;
    const reach = Math.abs(bx - ax) / 2;
    const sign = forward ? 1 : -1;
    return `M${ax} ${ay} C${ax + sign * reach} ${ay} ${bx - sign * reach} ${by} ${bx} ${by}`;
  }
  const down = dy > 0;
  const ax = from.x + NODE_WIDTH / 2;
  const bx = to.x + NODE_WIDTH / 2;
  const ay = down ? from.y + NODE_HEIGHT : from.y;
  const by = down ? to.y : to.y + NODE_HEIGHT;
  const reach = Math.abs(by - ay) / 2;
  const sign = down ? 1 : -1;
  return `M${ax} ${ay} C${ax} ${ay + sign * reach} ${bx} ${by - sign * reach} ${bx} ${by}`;
}

export function Diagram({ spec }: { spec: DiagramSpec }) {
  const { tr } = useLanguage();
  const reduce = usePrefersReducedMotion();
  const [ref, seen] = useInView<SVGSVGElement>();

  const positions = new Map<string, Point>(
    spec.nodes.map((node) => [node.id, { x: COLUMNS[node.col], y: TOP + node.row * ROW_GAP }]),
  );

  return (
    <svg
      ref={ref}
      className={`dg ${seen ? "go" : ""}`}
      viewBox="0 0 720 260"
      role="img"
      aria-label={tr(copy.diagramLabel)}
    >
      {spec.edges.map(([fromId, toId], index) => {
        const from = positions.get(fromId);
        const to = positions.get(toId);
        if (!from || !to) return null;
        const d = edgePath(from, to);
        const style = { "--i": index } as CSSProperties;
        return (
          <g key={`${fromId}-${toId}`}>
            <path className="eg" d={d} />
            <path className="fl" d={d} style={style} />
            {!reduce && (
              <circle className="pk" r={3.5}>
                <animateMotion dur="3.4s" begin={`${index * 0.55}s`} repeatCount="indefinite" path={d} />
              </circle>
            )}
          </g>
        );
      })}
      {spec.nodes.map((node, index) => {
        const point = positions.get(node.id);
        if (!point) return null;
        const style = { "--i": index } as CSSProperties;
        return (
          <g key={node.id} className="nd" style={style}>
            <rect x={point.x} y={point.y} width={NODE_WIDTH} height={NODE_HEIGHT} rx={2} />
            <text className="l" x={point.x + 14} y={point.y + 22}>
              {tr(node.label)}
            </text>
            <text className="s" x={point.x + 14} y={point.y + 40}>
              {tr(node.sub)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
