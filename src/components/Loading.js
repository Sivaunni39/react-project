import { LinearProgress, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Typography
      component="h1"
      variant="h5"
      color="inherit"
      noWrap
      align="center"
      sx={{ flexGrow: 1 }}
    >
      <LinearProgress color="secondary" />
      Loading...
    </Typography>
  );
};

export default Loading;
