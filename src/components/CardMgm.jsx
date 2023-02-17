import * as React from "react";
import Img from "gatsby-image";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { Link } from "gatsby";

export default function CardMgm({ desc, id, image, url, title }) {
  return (
    <Link to={url}>
      <div
        className="flex flex-col place-items-center border-2 border-mainTextColor bg-mainBlue cursor-pointer hover:opacity-80 "
        id={id}
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
        {image && (
          <img
            src={image.childrenImageSharp[0].fluid.src}
            alt={title}
            className="h-[240px]"
          />
        )}
        {/* <div className="bg-mainBlue h-[200px] w-full" /> */}
        <div className="px-2 pt-4 pb-6 text-center bg-white">
          <h2 className="text-2xl font-medium my-3 text-mainTextColor line-clamp-1">
            {title}
          </h2>
          <p className="text-secondaryTextColor line-clamp-2">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
