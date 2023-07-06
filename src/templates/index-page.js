import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import EventsTab from "../components/EventsTab";
import SliderCarousel from "../components/SliderCarousel";
import GridSquare from "../components/GridSquare";
import GridSquare2 from "../components/GridSquare2";
import MgmFullRow from "../components/MgmFullRow";
import BlogRoll from "../components/BlogRoll";
import ButtonMgm from "../components/ButtonMgm";

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
      <SliderCarousel />
      <GridSquare />
      <BlogRoll />
      <EventsTab />
      <MgmFullRow />
      <GridSquare2 />
      <section className="bg-white py-6 widest">
        <div className="grid md:grid-cols-5 inside">
          <h2 className="text-4xl col-span-2 md:w-4/5 font-bold">
            Celebrate with us
          </h2>

          <div className="col-span-3">
            <p className="mb-6 mt-2 lg:mb-12 lg:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
              quaerat et. Beatae quam, saepe consequuntur facilis exercitationem
              nihil molestias earum!
            </p>
            <div>
              <ButtonMgm text="Know more" />
            </div>
          </div>
        </div>
      </section>
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
  const { frontmatter } = data.markdownRemark;
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
