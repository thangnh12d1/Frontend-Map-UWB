import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

function MapCard({ title, width, height, numberAPs }) {
  const buttonStyle = {
    width: "100%", // Set the width to 100%
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        alt="map default"
        height="140"
        image="https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2015/06/Analytic-map1.png"
      />
      <CardContent>
        <Typography color="#1A36C0" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography variant="body2" color="text.secondary">
              Width: {width} m
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Height: {height} m
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Number of APs: {numberAPs}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Button
                size="small"
                variant="contained"
                color="success"
                style={buttonStyle}
              >
                TRAINING NEW DATA
              </Button>
              <Button variant="contained" size="small" style={buttonStyle}>
                POSITION
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MapCard;
