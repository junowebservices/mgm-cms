import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import HomePage from "../components/Homepage/LandingPage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  firstquadrant,
  secondquadrant,
  thirdquadrant,
  fourtquadrant,
  fullrow,
  card,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  return (
    <>
      <HomePage
        title={title}
        firstquadrant={firstquadrant}
        secondquadrant={secondquadrant}
        thirdquadrant={thirdquadrant}
        fullrow={fullrow}
        card={card}
        // fourtquadrant={fourtquadrant}
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  firstquadrant: PropTypes.object,
  secondquadrant: PropTypes.object,
  thirdquadrant: PropTypes.object,
  fourtquadrant: PropTypes.object,
  card: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter.card, "wwwfrontmatter");
  return (
    <Layout>
      <IndexPageTemplate
        // image={frontmatter.image}
        title={frontmatter.title}
        firstquadrant={frontmatter.firstquadrant}
        secondquadrant={frontmatter.secondquadrant}
        thirdquadrant={frontmatter.thirdquadrant}
        fourtquadrant={frontmatter.fourtquadrant}
        fullrow={frontmatter.fullrow}
        card={frontmatter.card}
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
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
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
        card {
          heading
          description
          image1 {
            alt
            image {
              childrenImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
        fullrow {
          heading
          description
          button
          textbutton
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
