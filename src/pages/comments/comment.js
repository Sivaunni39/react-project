import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComments } from "../../services/comment-service";
import CommentIcon from "@mui/icons-material/Comment";
import { useAppContext } from "../../components/Context";

const Comment = () => {
  const [comment, setComments] = useState([]);
  const { updateTitle } = useAppContext();
  useEffect(() => {
    updateTitle("Comments");
    getComments().then((res) => {
      setComments(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        color="Blue"
        align="center"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        <CommentIcon />
        Comments
      </Typography>
      {comment.map((item) => (
        <div key={item.id} style={{ padding: "10px 0" }}>
          <Link to={`/comments/${item.id}`}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {item.name}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Comment;
