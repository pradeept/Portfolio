export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`diya ${className}`}
      viewBox="0 0 64 68"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="diya-flame"
        d="M33 29C28 23 29 18 34 8c1 7 9 12 5 19-1 3-3 4-6 4Z"
        fill="#efda78"
        stroke="#302d2a"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M32 31c0 4-1 8-1 11"
        stroke="#302d2a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 39c6 3 16 5 24 5 9 0 17-2 22-5-2 11-12 18-23 18S12 51 9 39Z"
        fill="#b5453e"
        stroke="#302d2a"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M8 39c10 7 35 8 48 0M17 49c11 7 23 7 32 0M22 61h21M4 28l5-3m48 0 4 3"
        stroke="#302d2a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
