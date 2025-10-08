import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.68 5.4C11.13 6.64 10 8.63 10 10.95c0 2.39 1.13 4.39 2.68 5.64" />
      <path d="M11.32 18.6c1.56-1.25 2.68-3.24 2.68-5.55s-1.12-4.3-2.68-5.55" />
      <path d="M14 18.6c1.56-1.25 2.68-3.24 2.68-5.55S15.56 8.75 14 7.5" />
      <path d="M10 5.4C8.44 6.65 7.32 8.64 7.32 10.95S8.44 15.25 10 16.5" />
      <rect width="18" height="18" x="3" y="3" rx="4" />
    </svg>
  );
}