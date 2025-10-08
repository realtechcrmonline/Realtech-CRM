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
      <path d="M12 22v-8" />
      <path d="M12 14l-4-4-2 2.5" />
      <path d="M12 14l4-4 2 2.5" />
      <path d="M12 14l-6 6" />
      <path d="M12 14l6 6" />
      <path d="M4 12a8 8 0 1016 0" />
    </svg>
  );
}
