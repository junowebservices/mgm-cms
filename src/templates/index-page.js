import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import HomePage from "../components/Homepage/LandingPage";
import SliderCarousell from "../components/SliderCarousell";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  image,
  imageslider,
  grid,
  fullrow,
  grid2,
  fullrow2,
}) => {
  // const heroImage = getImage(image) || image;
  return (
    <>
      <SliderCarousell />
      <HomePage
        title={title}
        image={image}
        grid={grid}
        fullrow={fullrow}
        grid2={grid2}
        fullrow2={fullrow2}
      />
      {/* <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageslider: PropTypes.object,
  grid: PropTypes.object,
  fullrow: PropTypes.object,
  grid2: PropTypes.object,
  fullrow2: PropTypes.object,
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
};

const IndexPage = ({ data }) => {
  console.log(data, "wwwdata");
  const { frontmatter } = data.markdownRemark;
  // console.log(frontmatter.imageslider, "wwwfrontmatter");
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        imageslider={frontmatter.imageslider}
        grid={frontmatter.grid}
        fullrow={frontmatter.fullrow}
        grid2={frontmatter.grid2}
        fullrow2={frontmatter.fullrow2}
        // image={frontmatter.image}
        // heading={frontmatter.heading}
        // mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageslider {
          image1 {
            alt
            image {
              childrenImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
          image2 {
            alt
            image {
              childrenImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
          image3 {
            alt
            image {
              childrenImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
          image4 {
            alt
            image {
              childrenImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
        grid {
          title
          firstquadrant {
            title
            description
            button
            textbutton
          }
          secondquadrant {
            title
            description
            button
            textbutton
          }
          thirdquadrant {
            title
            description
            button
            textbutton
          }
          fourtquadrant {
            title
            description
            button
            textbutton
          }
        }
        fullrow {
          title
          description
          button
          textbutton
        }
        grid2 {
          title
          firstquadrant {
            title
            description
            button
            textbutton
          }
          secondquadrant {
            title
            description
            button
            textbutton
          }
          thirdquadrant {
            title
            description
            button
            textbutton
          }
          fourtquadrant {
            title
            description
            button
            textbutton
          }
        }
        fullrow2 {
          title
          description
          button
          textbutton
        }
      }
    }
  }
`;
