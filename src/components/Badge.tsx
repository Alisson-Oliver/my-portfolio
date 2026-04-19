import { cn } from "../lib/utils";

interface BadgeProps {
  className?: string;
  title: string;
}

export function Badge({ className, title }: BadgeProps) {
  return (
    <div
      className={cn(
        "text-secondary px-2  inline border-primary-border border rounded-2xl  bg-badge text-[0.65rem] font-black",
        className,
      )}
    >
      {title}
    </div>
  );
}
