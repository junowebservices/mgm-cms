import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";
import Img from "gatsby-image";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  featuredimage,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="widest">
      {helmet || ""}
      <img
        className="object-fill w-full"
        src={featuredimage.childrenImageSharp[0].fluid.src}
        alt={title}
      />
      {/* <div className="w-full object-fill border-2 ">
        <PreviewCompatibleImage
          imageInfo={featuredimage.childrenImageSharp[0].fluid.src}
        />
      </div> */}
      <div className="inside my-6">
        <div>
          <h2 className="text-3xl blog-title font-Playfair font-bold ">
            {title}
          </h2>
          <div className="my-4">
            <p className="text-secondaryTextColor text-base">
              Article Created by:{" "}
            </p>
            <p className="text-secondaryTextColor text-base">
              Creation Date: {date}
            </p>
          </div>
          {tags && tags.length ? (
            <div className="flex gap-2">
              <p className="text-secondaryTextColor text-base">Tags:</p>
              {tags.map((tag) => (
                <div key={tag + `tag`} className="grid place-content-center">
                  <Link to={`/tags/${kebabCase(tag)}/`}>
                    <p className="underline text-xs text-secondaryTextColor">
                      {tag}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          ) : null}
          <div className="space-y-4 mt-4">
            <p className="text-mainTextColor ">{description}</p>
            <PostContent content={content} className="space-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  date: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        // image={post.frontmatter.featuredimage}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childrenImageSharp {
            fluid(quality: 100) {
              src
            }
          }
        }
        tags
      }
    }
  }
`;
