import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";
const CloudSpeaker = () => {
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

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Grid container sx={gridItemStyle}>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ ...flexCenter, mb: 5 }}>
        <Typography variant="h4" fontWeight={700}>
          Some of Our Top Cloud Speakers
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "1px solid black",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://hopin.imgix.net/suggested_profiles/pictures/000/824/675/original/9488c85d-a6fd-4638-8dc2-a40164a6fda1.png?ixlib=rails-4.3.1&auto=compress&w=500&h=500&fit=clip&s=9e2dd52a3cb05cd41056066a34981946"
            alt="customer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sri Shivananda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EVP & CTO, PayPal
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LinkedInIcon />
            </Button>
            <Button size="small">
              <TwitterIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ ...flexCenter, mt: 10, mb: 5 }}
      >
        <Typography variant="h4" fontWeight={700}>
          What you can expect at autocon/23
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          }}
        >
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="https://hopin.com/canvas/_next/static/image/src/components/editor/themes/starter-hub/blocks/sections/benefits/assets/icons/icon-3.a776270f938dda63e4288e05fb9ed006.svg"
            alt="customer"
          />
          <CardContent sx={{ ...flexCenter }}>
            <Typography gutterBottom variant="h5" component="div">
              Visionary Insights on Autonomous <br />
              Cloud Operations
            </Typography>
            <Typography
              variant="body1"
              font-size="1.125rem"
              color="rgb(74, 74, 74)"
              fontWeight={400}
            >
              Delve into the rapidly growing field of autonomous <br /> cloud
              management, and learn how AI/ML is being <br />
              applied to cloud operations
            </Typography>
          </CardContent>
        </Card>
      </Grid>{" "}
      <Grid item xs={12} sm={6} md={4} lg={4} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          }}
        >
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="https://hopin.com/canvas/_next/static/image/src/components/editor/themes/starter-hub/blocks/sections/benefits/assets/icons/icon-4.dba44fd61144dc06fd6ac1bc4a48a4fb.svg"
            alt="customer"
          />
          <CardContent sx={{ ...flexCenter }}>
            <Typography gutterBottom variant="h5" component="div">
              Actionable Strategies to Drive <br />
              Business Value
            </Typography>
            <Typography
              variant="body1"
              font-size="1.125rem"
              color="rgb(74, 74, 74)"
              fontWeight={400}
            >
              Uncover actionable strategies to deploy autonomous <br />
              for enhanced performance, cost, and availability, <br /> driving
              tangible business value. Learn from real-world <br />
              case studies where autonomous cloud management <br /> has been a
              catalyst for transformative change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} sx={{ ...flexCenter }}>
        <Card
          sx={{
            ...flexCenter,
            maxWidth: 345,
            mb: 5,
            padding: 5,
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          }}
        >
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="https://hopin.com/canvas/_next/static/image/src/components/editor/themes/starter-hub/blocks/sections/benefits/assets/icons/icon-6.9fcf86b81a75c276478c4732942a7da5.svg"
            alt="customer"
          />
          <CardContent sx={{ ...flexCenter }}>
            <Typography gutterBottom variant="h5" component="div">
              Deep Technical Insights
            </Typography>
            <Typography
              variant="body1"
              font-size="1.125rem"
              color="rgb(74, 74, 74)"
              fontWeight={400}
            >
              Hear from and engage with technical experts who are <br />
              at the forefront of autonomous cloud technologies <br /> being
              applied to compute, storage and streaming
            </Typography>
          </CardContent>
        </Card>
      </Grid>
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
              variant="h4"
              component="div"
              font-size="2 rem"
              color="rgb(0, 0, 0)"
              fontWeight={700}
            >
              It's time to go autonomous
            </Typography>
            <Typography
              variant="body1"
              font-size="1.125rem"
              color="rgb(74, 74, 74)"
              fontWeight={400}
            >
              The missing ingredient behind continuous optimization for modern
              applications is autonomous operations. But it hasn't been
              available and accessible to SREs and Ops teams. Until now.
            </Typography>
          </CardContent>
          <a href="#">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                backgroundColor: "rgb(233, 84, 111)",
                border: "none",
                height: "50px",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                color={"white"}
                component="div"
              >
                Save Your Seat
              </Typography>
            </button>
          </a>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CloudSpeaker;
