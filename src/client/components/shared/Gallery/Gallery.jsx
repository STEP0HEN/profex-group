import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
import ListSubheader from "@mui/material/ListSubheader";
// import InfoIcon from "@mui/icons-material/Info";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

export default function ImagesGallery() {
  return (
    <>
      <Navbar />
      <ImageList sx={{ width: { sm: 500, lg: "100%" }, height: { md: 450 } }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">PORTFOLIO</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              // actionIcon={
              //   <IconButton
              //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              //     aria-label={`info about ${item.title}`}
              //   >
              //     <InfoIcon />
              //   </IconButton>
              // }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div style={{ background: "navajowhite" }}>
        <Footer />
      </div>
    </>
  );
}

const itemData = [
  {
    img: require("../../../assets/images/gallery-glassdoors-white.jpg"),
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: require("../../../assets/images/gallery-hallway.jpg"),
  },
  {
    img: require("../../../assets/images/gallery-kitchen-cabinet.jpg"),
  },
  {
    img: require("../../../assets/images/gallery-kitchen.jpg"),
    cols: 2,
  },
  {
    img: require("../../../assets/images/gallery-office-floor-wood.jpg"),
    cols: 2,
  },
  {
    img: require("../../../assets/images/gallery-office-floor.jpg"),
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: require("../../../assets/images/gallery-office-hallway.jpg"),
  },
  {
    img: require("../../../assets/images/gallery-office.jpg"),
  },
  {
    img: require("../../../assets/images/gallery-paint-brush-tape.jpg"),
    rows: 2,
    cols: 2,
  },
  {
    img: require("../../../assets/images/gallery-roller-painting.jpg"),
  },
  {
    img: require("../../../assets/images/gallery-table-blue.jpg"),
  },
];
