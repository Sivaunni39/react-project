import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";
import { getCommentDetails } from "../../services/comment-service";
import { useAppContext } from "../../components/Context";
import Face2Icon from "@mui/icons-material/Face2";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
const CommentDetails = () => {
  const [comment, setComment] = useState();
  const { updateTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    updateTitle("Comment Details");
    getCommentDetails(id).then((res) => {
      setComment(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <Typography
        component="h4"
        variant="h5"
        color="Blue"
        align="center"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        <CommentIcon />
        Comment Details
      </Typography>
      {comment && (
        <div>
          <fieldset>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <li>
                <AlternateEmailIcon />
                {comment.email}
              </li>
            </Typography>
            <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
              <li>
                <Face2Icon /> {comment.name}
              </li>
            </Typography>
          </fieldset>
          <fieldset>
            <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
              <li>
                <ModeCommentIcon />
                {comment.body}
              </li>
            </Typography>
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default CommentDetails;
