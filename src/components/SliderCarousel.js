import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " !drop-shadow-2xl !bg-black/20 !rounded-full !mr-10 md:!mr-16"
      }
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " !drop-shadow-2xl !bg-black/20 !rounded-full !ml-10 md:!ml-16"
      }
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  arrows: true,
  // centerMode: true,
  infinite: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderTemplate = ({ data }) => {
  const imageData = data.markdownRemark.frontmatter.imageslider;

  return (
    <Slider
      {...settings}
      className="overflow-hidden min-h-[230px] h-[230px] sm:h-[450px] md:h-[580px]"
    >
      {imageData.image1 && (
        <Img fluid={imageData.image1.image.childrenImageSharp[0].fluid} />
      )}
      {imageData.image2 && (
        <Img fluid={imageData.image2.image.childrenImageSharp[0].fluid} />
      )}
      {imageData.image3 && (
        <Img fluid={imageData.image3.image.childrenImageSharp[0].fluid} />
      )}
      {imageData.image4 && (
        <Img fluid={imageData.image4.image.childrenImageSharp[0].fluid} />
      )}
      {imageData.image5 && (
        <Img fluid={imageData.image5.image.childrenImageSharp[0].fluid} />
      )}
    </Slider>
  );
};

export default function SliderCarousel(props) {
  return (
    <StaticQuery
      query={graphql`
        query IndexImageSlider {
          markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
              imageslider {
                image1 {
                  alt
                  image {
                    childrenImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                image2 {
                  alt
                  image {
                    childrenImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                image3 {
                  alt
                  image {
                    childrenImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                image4 {
                  alt
                  image {
                    childrenImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                image5 {
                  alt
                  image {
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
      render={(data) => <SliderTemplate data={data} {...props} />}
    />
  );
}

SliderTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};
