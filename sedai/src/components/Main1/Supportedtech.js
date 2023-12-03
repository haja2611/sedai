import React from "react";
import "../../styles/Supportedtech.css";
import backgroundImage from "../../pic/ball.png";
import backgroundImage1 from "../../pic/Group.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Supportedtech = () => {
  const theme = useTheme();
  const flexCenter = {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#040c21",
  };
  const gridItemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#040c21",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  const containerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    width: "100%",
    backgroundRepeat: "no-repeat",
    height: "100%",
  };

  return (
    <div
      style={{
        flexGrow: 1,
        paddingBottom: "100px",
        backgroundColor: "#040c21",
      }}
    >
      <img
        src={backgroundImage}
        width="100%"
        height="100%"
        object-fit="cover"
      />

      <Grid container sx={gridItemStyle}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ ...flexCenter }}>
          <Card
            sx={{
              ...flexCenter,
              maxWidth: 1000,
              mb: 5,
              padding: 5,
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            }}
          >
            <CardContent sx={{ ...flexCenter }}>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                font-size="2 rem"
                color="white"
              >
                Supported Technologies
              </Typography>
              <Typography
                variant="h6"
                fontFamily=" Inter,sans-serif"
                font-size="px"
                color=" #d8d8d8"
                line-height="26px"
                mb="10px"
              >
                Sedai provides hands-free continuous optimization powered by
                AI/ML for serverless and container-based applications, and
                integrates with common APM, notification providers and Runbook
                automation solutions.
              </Typography>
            </CardContent>
            <a href="#">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "200px",
                  backgroundColor: " #38b6b2",
                  borderRadius: "33px",
                  border: "none",
                  height: "50px",
                  backgroundImage: "linear-gradient(90deg,#7973ff,#51abd6)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={"white"}
                  component="div"
                >
                  SEE INTEGRATION
                </Typography>
              </button>
            </a>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            ...flexCenter,
            height: "80vh",
            width: "100%",
          }}
        >
          <div
            style={{
              ...flexCenter,
            }}
          >
            <img
              src={backgroundImage1}
              width="100%"
              height="100%"
              object-fit="cover"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Supportedtech;
