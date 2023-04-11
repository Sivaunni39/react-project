import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/Context";
import { getAlbums } from "../../services/albums-service";

const Albums = () => {
  const [Albums, setAlbums] = useState([]);
  const { updateTitle } = useAppContext();
  useEffect(() => {
    updateTitle("Albums");
    getAlbums().then((res) => {
      setAlbums(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Albums
      </Typography>
      {Albums.map((item) => (
        <div key={item.id} style={{ padding: "10px 0" }}>
          <Link to={`/albums/${item.id}`}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {item.title}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Albums;
