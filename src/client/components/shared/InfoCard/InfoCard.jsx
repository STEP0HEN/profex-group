import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "../InfoCard/InfoCard.css";

export default function InfoCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleRedirect = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className="text-something"
      sx={{
        marginTop: "2em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={
          data?.img ||
          `https://gumiimpex.hr/upload/rotator_element/webpnet-resizeimage-7-5dd01011ad3b4_5de59991b1cc9.jpg`
        }
        alt={data?.title + " " + "billede"}
      />
      <CardContent>
        <Typography variant="h4">{data?.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ justifyContent: "center" }}>
        {/* <Button variant="contained" onClick={() => {}}>
          LAES MERE
        </Button> */}
      </CardActions>
    </Card>
  );
}
