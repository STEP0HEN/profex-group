import { Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../shared/ContactForm/ContactForm";
import InfoCard from "../shared/InfoCard/InfoCard";
import MapChart from "../shared/Map/Map";
import "./Home.css";
const data = require("../../../server/data.json");
const bannerImage = require("../../assets/images/banner.jpg");
const polyurethan = require("../../assets/images/polyurethane.jpg");
const maling = require("../../assets/images/maling_white.jpeg");
const microcement = require("../../assets/images/microcement.jpg");
const rengøring = require("../../assets/images/rengøring.jpg");
const gulvservice = require("../../assets/images/gulvservice.jpeg");

const images = [gulvservice, maling, rengøring, microcement, polyurethan];
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
          height: "100vh",
          position: "relative",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h4"
          className="banner-text"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            width: "60%",
            background: "transport",
            fontSize: { xs: "1.2rem", md: "2em" },
            fontWeight: "900",
          }}
        >
          Vi hjælper dig med at skabe det ideelle rum. I Profex Group er vi
          specialiseret i at opfylde dine ønsker gennem kreative løsninger. Vi
          kan hjælpe med alt inden for maling, gulvservice, microcement,
          rengøring og serviceopgaver. Vi har samlet alle services så du som
          kunde kun behøver ét kontaktpunkt.
        </Typography>
        {/* <img
          src={bannerImage}
          alt="site Banner"
          style={{ width: "inherit", height: "100vh" }}
        /> */}
      </div>
      <div
        className="card-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: 0,
          padding: "10px",
          justifyContent: "space-around",
        }}
      >
        {serviceInfo?.map(
          (info) => (
            (info.img = images?.find((image) =>
              image.toLowerCase().includes(info?.title.toLowerCase())
            )),
            (<InfoCard data={info} key={info.title} />)
          )
        )}
      </div>
      <div>
        <ContactForm />
      </div>
      <Typography
        sx={{
          fontStyle: "oblique",
          fontFamily: "emoji",
          margin: "15px",
        }}
      >
        Hos Profex Goup har vi dig i centrum, vi respekterer dit hjem og dine
        ønsker og overholder vores aftaler. Vi ser frem til at høre fra dig.
      </Typography>
      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
}
