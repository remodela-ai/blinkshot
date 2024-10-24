import { ComponentProps } from "react";

export default function XIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}

    </svg>
  );
}
