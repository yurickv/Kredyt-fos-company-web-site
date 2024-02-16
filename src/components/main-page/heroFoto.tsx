import { getImageProps } from "next/image";

interface HeroFotoProps {
  mobileFoto: string;
  desktopFoto: string;
}

export default function HeroFoto({ mobileFoto, desktopFoto }: HeroFotoProps) {
  const common = { alt: "Kredyt-FOS offer foto", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 448,
    src: desktopFoto,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 360,
    height: 548,
    src: mobileFoto,
  });

  return (
    <picture>
      <source media="(min-width: 744px)" srcSet={desktop} />
      <source media="(min-width: 360px)" srcSet={mobile} />
      <img {...rest} style={{ width: "100%", height: "auto" }} />
    </picture>
  );
}
