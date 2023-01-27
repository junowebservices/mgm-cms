import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        image={image}
        imageslider={data.imageslider}
        grid={data.grid}
        fullrow={data.fullrow}
        grid2={data.grid2}
        fullrow2={data.fullrow2}

        // image={getAsset(data.image)}
        // heading={data.heading}
        // firstquadrant={data.firstquadrant}
        // secondquadrant={data.secondquadrant}
        // thirdquadrant={data.thirdquadrant}
        // fourtquadrant={data.fourtquadrant}
        // fullrow={data.fullrow}
        // description={data.description}
        // intro={data.intro || { blurbs: [] }}
        // card={data.card}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
