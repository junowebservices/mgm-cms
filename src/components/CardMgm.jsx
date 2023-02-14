import * as React from "react";
import Img from "gatsby-image";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export default function CardMgm({ key, image, title, desc }) {
  console.log(image, "wwwimage");
  return (
    <div
      className="flex flex-col place-items-center border-2 border-mainTextColor bg-mainBlue cursor-pointer hover:opacity-80 max-w-xs"
      id={key}
    >
      {/* <PreviewCompatibleImage
        imageInfo={{
          image: image,
          // width:
          //   post.frontmatter.featuredimage.childImageSharp
          //     .gatsbyImageData.width,
          // height:
          //   post.frontmatter.featuredimage.childImageSharp
          //     .gatsbyImageData.height,
        }}
      /> */}
      <img
        src={image.childrenImageSharp[0].fluid.src}
        alt={title}
        className="h-[200px]"
      />
      {/* <div className="bg-mainBlue h-[200px] w-full" /> */}
      <div className="px-6 pt-4 pb-6 text-center bg-white">
        <h2 className="text-2xl font-medium my-3 text-mainTextColor line-clamp-1">
          {title}
        </h2>
        <p className="text-secondaryTextColor line-clamp-2">{desc}</p>
      </div>
    </div>
  );
}
