import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import { getAlbumsDetails } from "../../services/albums-service";
import { useAppContext } from "../../components/Context";

const AlbumsDetails = () => {
  const { updateTitle } = useAppContext();
  const [Albums, setAlbums] = useState();
  const { id } = useParams();
  useEffect(() => {
    updateTitle("Album Details");
    getAlbumsDetails(id).then((res) => {
      setAlbums(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <Typography
        component="h4"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        <PhotoAlbumIcon />
        Albums Details
      </Typography>
      {Albums && (
        <div>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
            <li>Id: {Albums.id}</li>
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ flexGrow: 1 }}>
            <li> {Albums.title}</li>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default AlbumsDetails;
