import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function createData(name, part1, part2, part3, part4) {
  return { name, part1, part2, part3, part4 };
}

const rows = [
  createData("Object_0", 0, 3, 2, 2),
  createData("Object_1", 5, 0, 1, 6),
  createData("Object_2", 10, 0, 1, 6),
  createData("Object_3", 5, 6, 11, 1),
  createData("Object_4", 15, 0, 1, 6),
  createData("Object_5", 5, 10, 10, 5),
];

const DetailCardMap = () => {
  const boxStyle = {
    border: "2px solid #0F3BE3",
    padding: "8px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5C84DD",
    height: "760px",
  };

  const boxSectionStyle = {
    padding: "16px",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
  };

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "white",
  };

  return (
    <Box style={boxStyle}>
      {/* Your content goes here */}
      <div class="grid grid-rows-2 gap-1">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Box style={boxSectionStyle}>
              <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem>
                  <ListItemText primary="Name Map" secondary="709-IoT-Room" />
                </ListItem>
                <Divider />
                <ListItem divider>
                  <ListItemText primary="Width" secondary="20" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Height" secondary="15" />
                </ListItem>
              </List>
            </Box>
          </div>
          <div>
            <Box style={boxSectionStyle}>
              {/* Your content goes here */}
              <Typography variant="h5">Description</Typography>
              <img
                src="https://cdn.tgdd.vn/hoi-dap/1392233/cach-ve-do-thi-ham-so-trong-word-1-800x450.jpg" // Replace with your image URL
                alt="Your Image Alt Text"
                style={{ width: "100%", height: "85%", objectFit: "cover" }}
              />
            </Box>
          </div>
        </div>
        <div>
          <Box style={boxSectionStyle}>
            <div className="flex items-center justify-center gap-64">
              <div>
                <Typography variant="h6">Object</Typography>
              </div>
              <div>
                <Typography variant="h6">Access Point</Typography>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        {row.name}: {row.part1}
                      </TableCell>
                      <TableCell align="left">{row.part2}</TableCell>
                      <TableCell align="left">{row.part3}</TableCell>
                      <TableCell align="left">{row.part4}</TableCell>
                      <TableCell align="left">
                        <DeleteOutlineIcon />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="gap-4 p-2 flex items-center justify-center">
                <div>
                  <Button variant="contained" disableElevation>
                    <AddCircleOutlineIcon />
                  </Button>
                </div>
              </div>
            </TableContainer>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default DetailCardMap;
