import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useTheme } from "styled-components";

export const useBreakPoints = () => {
  const { down, up } = useTheme().breakpoints;

  const downSm = useMediaQuery(down("sm"));
  const downMd = useMediaQuery(down("md"));
  const downLg = useMediaQuery(down("lg"));
  const downXl = useMediaQuery(down("xl"));

  const upXs = useMediaQuery(up("xs"));
  const upSm = useMediaQuery(up("sm"));
  const upMd = useMediaQuery(up("md"));
  const upLg = useMediaQuery(up("lg"));
  const upXl = useMediaQuery(up("xl"));

  return {
    downSm,
    downMd,
    downLg,
    downXl,
    upXs,
    upLg,
    upMd,
    upXl,
    upSm,
  };
};
