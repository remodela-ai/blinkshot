import { ComponentProps } from "react";

export default function Logo(props: ComponentProps<"svg">) {
  return (
    <svg
      width={228}
      height={24}
      viewBox="0 0 228 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >

      <rect
        x={124.15}
        y={1.15}
        width={19.7}
        height={19.7}
        rx={3.85}
        fill="url(#pattern0_51_229)"
        stroke="#151515"
        strokeWidth={0.3}
      />

      <path d="M109 1v19.5" stroke="#F3F3F3" strokeWidth={0.5} />
      <defs>
        <pattern
          id="pattern0_51_229"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_51_229" transform="scale(.0039)" />
        </pattern>

      </defs>
    </svg>
  );
}
