import { Grid } from "@material-ui/core";
import AppBarMap from "../components/AppBarMap";
import MapSelection from "../components/MapSelection";

const MapTable = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen bg-white">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBarMap />
        </Grid>
        <Grid item xs={12}>
          <MapSelection />
        </Grid>
      </Grid>
    </div>
  );
};

export default MapTable;
