// Copied from https://stackoverflow.com/questions/70500084/how-to-export-static-images-on-nextjs

import NextImage from "next/image";

const customLoader = ({ src }) => {
  return src;
};

export default function Image(props) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
};
