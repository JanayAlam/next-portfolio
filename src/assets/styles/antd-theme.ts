import { ThemeConfig } from "antd";
import { styledTheme } from "./styled-theme";

export const antDesignTheme: ThemeConfig = {
  token: {
    colorPrimary: styledTheme.colors.primary.main,
  },
  components: {
    Button: {
      // height
      controlHeight: 40,
      controlHeightSM: 32,
      controlHeightLG: 48,
      // padding y
      paddingBlock: 10,
      paddingBlockSM: 8,
      paddingBlockLG: 14,
      // padding x
      paddingInline: 16,
      paddingInlineSM: 12,
      paddingInlineLG: 24,
      // border radius
      borderRadius: 4,
      borderRadiusXS: 4,
      borderRadiusLG: 4,
    },
  },
};
