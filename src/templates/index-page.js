import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import HomePage from "../components/Homepage/LandingPage";
import SliderCarousell from "../components/SliderCarousel";
import GridSquare from "../components/GridSquare";
import GridSquare2 from "../components/GridSquare2";
import MgmFullRow from "../components/MgmFullRow";
import BlogRoll from "../components/BlogRoll";

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
      <GridSquare />
      <BlogRoll />
      <MgmFullRow />
      <GridSquare2 />
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
