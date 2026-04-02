"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";

type AlertVariant = "success" | "error" | "info";

interface AlertProps {
  variant: AlertVariant;
  message: string;
  onDismiss?: () => void;
}

const styles: Record<AlertVariant, { wrapper: string; icon: string; text: string }> = {
  success: {
    wrapper: "bg-blue-200/10 border border-blue-200/30",
    icon: "text-blue-200",
    text: "text-blue-200",
  },
  error: {
    wrapper: "bg-red-500/10 border border-red-500/30",
    icon: "text-red-400",
    text: "text-red-400",
  },
  info: {
    wrapper: "bg-white/5 border border-white/10",
    icon: "text-gray-300",
    text: "text-gray-300",
  },
};

const icons: Record<AlertVariant, React.ReactNode> = {
  success: (
    <svg viewBox="0 0 16 16" fill="currentColor" className="size-4 shrink-0 mt-0.5">
      <path
        fillRule="evenodd"
        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 16 16" fill="currentColor" className="size-4 shrink-0 mt-0.5">
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 5Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 16 16" fill="currentColor" className="size-4 shrink-0 mt-0.5">
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.75-9.25a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0v-4.5ZM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export default function Alert({ variant, message, onDismiss }: AlertProps) {
  const s = styles[variant];
  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-md px-4 py-3 text-sm ${s.wrapper}`}
    >
      <span className={s.icon}>{icons[variant]}</span>
      <p className={`flex-1 font-mono ${s.text}`}>{message}</p>
      {onDismiss && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className={`shrink-0 opacity-60 hover:opacity-100 transition-opacity ${s.icon}`}
        >
          <XMarkIcon className="size-4" />
        </button>
      )}
    </div>
  );
}
