import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import CardMgm from "./CardMgm";
import ButtonMgm from "./ButtonMgm";

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const path = typeof window !== "undefined" ? window.location.pathname : "";

    return (
      <section className="widest my-12 md:my-4">
        <div className="inside text-center md:my-12">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 place-items-center">
            {posts &&
              posts
                .slice(0, 3)
                .map(
                  ({ node: post }) =>
                    post.frontmatter.featuredpost && (
                      <CardMgm
                        desc={post.excerpt}
                        id={post.id}
                        image={post.frontmatter?.featuredimage}
                        url={post.fields.slug}
                        title={post.frontmatter.title}
                      />
                    )
                )}
          </div>
          {path === "/" && (
            <div className="mt-4 md:mt-6">
              <Link to="/blog">
                <ButtonMgm text="View more" contained />
              </Link>
            </div>
          )}
        </div>
      </section>
      // <div className="columns is-multiline">
      //   {posts &&
      //     posts.map(({ node: post }) => (
      //       <div className="is-parent column is-6" key={post.id}>
      //         <article
      //           className={`blog-list-item tile is-child box notification ${
      //             post.frontmatter.featuredpost ? "is-featured" : ""
      //           }`}
      //         >
      //           <header>
      //             {post.frontmatter.featuredimage ? (
      //               <div className="featured-thumbnail">
      //                 <PreviewCompatibleImage
      //                   imageInfo={{
      //                     image: post.frontmatter.featuredimage,
      //                     alt: `featured image thumbnail for post ${post.frontmatter.title}`,
      //                     width:
      //                       post.frontmatter.featuredimage.childImageSharp
      //                         .gatsbyImageData.width,
      //                     height:
      //                       post.frontmatter.featuredimage.childImageSharp
      //                         .gatsbyImageData.height,
      //                   }}
      //                 />
      //               </div>
      //             ) : null}
      //             <p className="post-meta">
      //               <Link
      //                 className="title has-text-primary is-size-4"
      //                 to={post.fields.slug}
      //               >
      //                 {post.frontmatter.title}
      //               </Link>
      //               <span> &bull; </span>
      //               <span className="subtitle is-size-5 is-block">
      //                 {post.frontmatter.date}
      //               </span>
      //             </p>
      //           </header>
      //           <p>
      //             {post.excerpt}
      //             <br />
      //             <br />
      //             <Link className="button" to={post.fields.slug}>
      //               Keep Reading →
      //             </Link>
      //           </p>
      //         </article>
      //       </div>
      //     ))}
      // </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childrenImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
