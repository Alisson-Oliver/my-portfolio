import { cn } from "../lib/cn";

interface BadgeProps {
  className?: string;
  title: string;
}

export function Badge({ className, title }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        "px-2 py-0.5",
        "text-secondary border-primary-border border rounded-2xl bg-badge text-[0.65rem] font-black",
        className,
      )}
    >
      <span className="mt-0.5">{title}</span>
    </div>
  );
}
