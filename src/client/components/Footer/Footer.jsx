import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import PermPhoneMsgTwoToneIcon from "@mui/icons-material/PermPhoneMsgTwoTone";
import "./Footer.css";
import {
  FacebookOutlined,
  Instagram,
  PlayArrowTwoTone,
} from "@mui/icons-material";
import MapChart from "../shared/Map/Map";
const data = [
  {
    icon: CottageTwoToneIcon,
    title: "FIND OS På ...",
    firstText: "Dræbyvej 5,2740 Skovlunde.",
    secondText: "Cvr no-40667563",
  },
  {
    icon: PermPhoneMsgTwoToneIcon,
    title: "CONTACT OS På...",
    firstText: "E-mail: info@profexgroup.dk.",
    secondText: "Nummer: +4542941344",
  },
];

const whatWeOffer = [
  "maling",
  "microcement",
  "polyurethan",
  "rengøring",
  "gulvslibning",
  "Vinyl",
  "epoxy",
  "Linoleum",
];

export default function Footer() {
  return (
    <>
      {data.map((data) => (
        <footer
          className="text-something"
          style={{
            display: "flex",
            flexDiretion: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          key={data.title}
        >
          <Card
            sx={{
              margin: "10px",
              backgroundColor: "inherit",
              boxShadow: "none",
            }}
          >
            {<data.icon sx={{ width: "80px", height: "80px" }} />}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#808080" }}
              >
                {data?.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: "100%" }}
              >
                {data.firstText}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: "100%" }}
              >
                {data.secondText}
              </Typography>
            </CardContent>
          </Card>
        </footer>
      ))}
      <Card style={{ backgroundColor: "navajowhite", boxShadow: "none" }}>
        <CardContent>
          <div className="some-container">
            <div className="frame">
              <a
                href="https://www.facebook.com/people/Profex-GROUP/100086346906739/"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookOutlined />
              </a>
              <a
                href="https://www.instagram.com/profex__group/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </div>
            <h1>Vi tilbyder</h1>
          </div>
          {whatWeOffer.map((offer) => {
            return (
              <div
                key={offer}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <li
                  style={{
                    listStyleType: "none",
                    textTransform: "capitalize",
                    display: "flex",
                    width: "28%",
                  }}
                >
                  <span style={{ display: "flex", flex: 1 }}>
                    <PlayArrowTwoTone style={{ color: "grey" }} />
                  </span>
                  <span style={{ display: "flex", flex: 2 }}>{offer}</span>
                </li>
              </div>
            );
          })}
        </CardContent>
      </Card>
      <div>
        <Typography variant="h5" sx={{ color: "#808080" }}>
          Vi dækker hele sjælland
        </Typography>
        <MapChart />
      </div>
    </>
  );
}
