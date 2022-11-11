import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function InfoCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleRedirect = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        flex: "0 0 calc((33.333333% - 2em))",
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
          `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop.cavendishmenswear.com%2Fwp-content%2Fuploads%2F2020%2F11%2FIMG_1117.jpg&f=1&nofb=1&ipt=5bdbc4ffe6be6e06d90b40915afab2b8c1c3b3ffb23fc0d273e48235f6fece56&ipo=images`
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
        <Button variant="contained" onClick={() => {}}>
          LAES MERE
        </Button>
      </CardActions>
    </Card>
  );
}
