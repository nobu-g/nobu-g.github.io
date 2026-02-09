// Copied from https://stackoverflow.com/questions/70500084/how-to-export-static-images-on-nextjs

import type { ImageProps } from "next/image";
import NextImage from "next/image";

const customLoader = ({ src }: { src: string }) => {
  return src;
};

export default function Image(props: ImageProps) {
  return <NextImage {...props} loader={customLoader} />;
}
