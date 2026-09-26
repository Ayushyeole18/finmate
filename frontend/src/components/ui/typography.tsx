import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Display({ className, children, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H1({ className, children, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-heading text-xl font-semibold text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function Body({ className, children, ...props }: TypographyProps) {
  return (
    <p className={cn("text-base text-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function Small({ className, children, ...props }: TypographyProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function Caption({ className, children, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-xs uppercase tracking-wide text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Metric({ className, children, ...props }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground tabular-nums",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}