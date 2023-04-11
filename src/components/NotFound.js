import { Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Typography
      component="h1"
      variant="h5"
      color="inherit"
      noWrap
      align="center"
      sx={{ flexGrow: 1 }}
    >
      404 - Not Found
    </Typography>
  );
};

export default NotFound;
