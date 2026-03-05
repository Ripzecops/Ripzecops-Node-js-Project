import React from "react";

type Props = { className?: string };

export function IconCode({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18L3 12l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPhone({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
      <path d="M10 7h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 18h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBrain({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v3a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v3a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconShield({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSpark({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M4 15l.8 3.2L8 19l-3.2.8L4 23l-.8-3.2L0 19l3.2-.8L4 15Z" transform="translate(4 -2)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconCap({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 8l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M7 10v6c0 1 2 3 5 3s5-2 5-3v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M21 10v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPen({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconWhatsapp({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3C9 3 3.5 8.4 3.5 15.2c0 2.7.9 5.2 2.4 7.3L5 29l6.7-1.8c1.3.5 2.8.8 4.3.8 7 0 12.5-5.4 12.5-12.2S23 3 16 3Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M16 5.5c-5.6 0-10.1 4.4-10.1 9.7 0 2.3.8 4.4 2.1 6.1l-1 3.8 4-1.1c1.5.8 3.2 1.2 5 1.2 5.6 0 10.1-4.4 10.1-9.7S21.6 5.5 16 5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13.6 12.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.6.5.2.4.7 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2.9 2.1 1.2 2.4 1.4.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.6-.1.2.1 1.6.7 1.9.9.3.1.5.2.6.3.1.1.1.6-.1 1.2-.2.6-1.2 1.2-1.7 1.3-.4.1-.9.1-1.5-.1-.4-.1-1-.3-1.8-.6-3-.9-5-4-5.2-4.3-.2-.3-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
