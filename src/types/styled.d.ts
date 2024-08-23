import { IStyledTheme } from "@/assets/styles/styled-theme.types";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends IStyledTheme {}
}
