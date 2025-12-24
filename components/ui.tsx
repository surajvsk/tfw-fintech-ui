import { ReactNode } from "react";

type ClassValue = string | false | null | undefined;

export const cn = (...classes: ClassValue[]) =>
  classes.filter(Boolean).join(" ");

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-4 py-16 md:px-10 md:py-24 lg:px-16",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  fullWidth,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "secondary";
  className?: string;
  fullWidth?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-150";
  const styles: Record<typeof variant, string> = {
    primary:
      "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:brightness-110",
    secondary:
      "bg-white text-slate-900 shadow-lg shadow-white/20 hover:-translate-y-0.5",
    ghost:
      "border border-white/15 text-white hover:border-white/30 hover:bg-white/5",
  };
  return (
    <button className={cn(base, styles[variant], fullWidth && "w-full", className)}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-100",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-[0.2em] text-sky-100/80">
        {label}
      </p>
      <p className="text-2xl font-semibold text-white">
        {value}
        {accent ? <span className="text-sky-200"> {accent}</span> : null}
      </p>
    </div>
  );
}


