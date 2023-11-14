import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const Companies = () => {
  const theme = useTheme();
  const flexCenter = {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const gridItemStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <Grid container sx={{ ...gridItemStyle }}>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ ...flexCenter, mb: 5 }}>
        <Typography variant="h4" fontWeight={700}>
          Why Autonomous Cloud Management?
        </Typography>
        <br />
        <Typography variant="h6" component="summary" sx={{ ...flexCenter }}>
          Optimizing modern applications is a problem now beyond human scale
          driven by microservice architectures and rapid release cycles.
          Operations teams face a near-impossible task using today's rules-based
          approaches and manual toil. Autonomous Cloud Management takes a
          different approach, applying AI/ML to continuously optimize
          applications without human intervention, right in production.
          Innovative companies are deploying autonomous systems to achieve
          application performance, cost and availability goals while
          simultaneously reducing toil, freeing up their teams to innovate
          faster.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ ...flexCenter, mb: 5 }}>
        <Typography variant="h4" fontWeight={700}>
          Engage with leaders & innovators
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{
          ...flexCenter,

          mb: 5,
          border: "3px solid black",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            alt="company"
            height="50"
            width="100"
            image="https://hopin.com/quiin/sponsors/logos/000/529/403/large/PayPal.svg.png?1657340840"
          />
        </Card>
      </Grid>{" "}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{
          ...flexCenter,

          mb: 5,
          border: "3px solid black",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            alt="company"
            height="50"
            width="100"
            image="https://hopin.com/quiin/sponsors/logos/000/534/183/large/paloaltonetworks-logo.png?1658976316"
          />
        </Card>
      </Grid>{" "}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{
          ...flexCenter,

          mb: 5,
          border: "3px solid black",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            alt="company"
            height="50"
            width="100"
            image="https://usercontent.hopin.com/sponsors/logos/000/616/078/large/Wipro_Primary_Logo_Color_RGB.svg.png?1698634703"
          />
        </Card>
      </Grid>{" "}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{
          ...flexCenter,
          height: 150,

          mb: 5,
          border: "3px solid black",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            alt="company"
            height="50"
            width="100"
            image="https://usercontent.hopin.com/sponsors/logos/000/616/069/large/KnowBe4_Logo.jpeg?1698633942"
          />
        </Card>
      </Grid>{" "}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{
          ...flexCenter,
          height: 150,

          mb: 5,
          border: "3px solid black",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            alt="company"
            height="50"
            width="100"
            image="https://hopin.com/quiin/sponsors/logos/000/529/406/large/horizontal_darktext.png?1657342213"
          />
        </Card>
      </Grid>{" "}
    </Grid>
  );
};

export default Companies;
