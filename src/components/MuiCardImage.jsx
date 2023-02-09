import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Img from "gatsby-image";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export default function MuiCardImage({ id, image, title, desc }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        border: "1px solid black",
        boxShadow: 0,
      }}
      id={id}
    >
      <CardActionArea>
        {image ? (
          <div className="max-h-[200px] overflow-hidden">
            <Img fluid={image.childrenImageSharp[0].fluid} />{" "}
          </div>
        ) : null}
        {/* <CardMedia
          component="img"
          height="140"
          image="/img/sample-2.jpg"
          alt="MGM"
        /> */}
        <CardContent className="text-center">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="line-clamp-1"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp-3"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
