import React from "react";
import { Grid } from "@mui/material";
import MapCard from "./MapCard";

function MapSelection() {
  const maps = [
    { title: "709-IoT-Room", width: 20, height: 15, numberAPs: 6 },
    { title: "709IoT-H6", width: 14.4, height: 8.4, numberAPs: 7 },
    { title: "Sample", width: 26.4, height: 13.6, numberAPs: 9 },
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {maps.map((map, index) => (
        <Grid item key={index}>
          <MapCard {...map} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MapSelection;
