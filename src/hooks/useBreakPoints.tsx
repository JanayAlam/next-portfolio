import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useTheme } from "styled-components";

export const useBreakPoints = () => {
  const { down, between, only, up } = useTheme().breakpoints;

  const downXs = useMediaQuery(down("md"));
  const downSm = useMediaQuery(down("sm"));
  const downMd = useMediaQuery(down("md"));
  const downLg = useMediaQuery(down("lg"));
  const downXl = useMediaQuery(down("xl"));

  const upXs = useMediaQuery(up("md"));
  const upSm = useMediaQuery(up("sm"));
  const upMd = useMediaQuery(up("md"));
  const upLg = useMediaQuery(up("lg"));
  const upXl = useMediaQuery(up("xl"));

  return {
    downXs,
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
