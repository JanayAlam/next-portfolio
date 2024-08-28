import { SVGProps } from "react";

interface ISvgProps extends SVGProps<SVGElement> {
  fill?: string;
  height?: string;
  width?: string;
}

export default ISvgProps;
