import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const RectangularAvatar = styled(Avatar)({
  width: 250,
  height: 50,
  borderRadius: "8px", // Set border-radius to create a rectangular shape
});

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
    justifyContent: "center",
    alignItems: "center",
    ml: 2,

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
        <Typography
          variant="h6"
          component="summary"
          sx={{ ...flexCenter, ml: 5, mr: 5 }}
        >
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
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://hopin.com/quiin/sponsors/logos/000/529/403/large/PayPal.svg.png?1657340840"
            alt="customer"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://hopin.com/quiin/sponsors/logos/000/534/183/large/paloaltonetworks-logo.png?1658976316"
            alt="customer"
          />
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://usercontent.hopin.com/sponsors/logos/000/616/069/large/KnowBe4_Logo.jpeg?1698633942"
            alt="customer"
          />
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://hopin.com/quiin/sponsors/logos/000/529/404/large/Paylocity_Logo_Logo.jpeg?1657341207"
            alt="customer"
          />
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://hopin.com/quiin/sponsors/logos/000/534/189/large/ringcentral_2.0_logo_POS.png?1658984087"
            alt="customer"
          />
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://usercontent.hopin.com/sponsors/logos/000/616/079/large/velocity-global-new-logo.png?1698634750"
            alt="customer"
          />
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://hopin.com/quiin/sponsors/logos/000/534/184/large/Belcorp-Logo-ready.png?1658976417"
            alt="customer"
          />
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://usercontent.hopin.com/sponsors/logos/000/616/079/large/velocity-global-new-logo.png?1698634750"
            alt="customer"
          />
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            ...flexCenter,
            width: 345,
            height: 190,
            mb: 5,
            border: "1px solid black",
          }}
        >
          <RectangularAvatar
            src="https://hopin.com/quiin/sponsors/logos/000/529/406/large/horizontal_darktext.png?1657342213"
            alt="customer"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Companies;
