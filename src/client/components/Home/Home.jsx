import { Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import InfoCard from "../shared/InfoCard";
const data = require("../../../server/data.json");
const bannerImage = require("../../assets/images/banner.jpg");

export default function Home() {
  const [serviceInfo, setServiceInfo] = useState(data);

  return (
    <>
      <Navbar />
      <div
        style={{
          background: "url(" + bannerImage + ") center center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            width: "50%",
            background: "transport",
          }}
        >
          {data[0].description}
        </Typography>
        {/* <img
          src={bannerImage}
          alt="site Banner"
          style={{ width: "inherit", height: "100vh" }}
        /> */}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: 0,
          padding: "10px",
          justifyContent: "space-around",
        }}
      >
        {serviceInfo?.map((info) => (
          <InfoCard data={info} key={info.title} />
        ))}
      </div>
      <Footer />
    </>
  );
}
