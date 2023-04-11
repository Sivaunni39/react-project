import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import { getPhotos } from "../../services/photos-services";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/Context";

const Photos = () => {
  const { updateTitle } = useAppContext();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    updateTitle("Photos");
    getPhotos().then((res) => {
      const ret = res.slice(0, 20);
      setPhotos(ret);
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
        Photos
      </Typography>
      <ImageList
        sx={{ width: "auto", height: 450 }}
        variant="woven"
        cols={4}
        gap={8}
      >
        {photos.map((item) => (
          <Link key={item.id} to={`/photos/${item.id}`}>
            <ImageListItem>
              <img
                srcSet={`${item.thumbnailUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </div>
  );
};

export default Photos;
