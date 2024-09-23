import { IconProps } from "../../models";

export const BarIcon: React.FC<IconProps> = ({
  width,
  height,
  fill,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? 32}
    height={height ?? 32}
    fill={fill ?? "currentColor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
  </svg>
);
