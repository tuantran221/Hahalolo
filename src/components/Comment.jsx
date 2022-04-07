import React from "react";
import { useState } from "react";

import Helmet from "../components/Helmet";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import avt from "../asset/avatar.jpg";

import {
  Button,
  IconButton,
  LinearProgress,
  Typography,
  Popper,
  MenuItem,
  MenuList,
} from "@mui/material";
import useWindowScrollPositions from "../hooks/useWindowScrollPositions";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import im from "../asset/background.png";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import HideSourceIcon from "@mui/icons-material/HideSource";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import G from "../components/Grid";
import { Divider } from "@mui/material";
import img1 from "../asset/avatar.jpg";
import img2 from "../asset/Kevin_De_Bruyne.jpg";
import img3 from "../asset/Naymar-and-Nike-Split.jpg";
import img4 from "../asset/Kylian_Mbappe.jpg";
import img5 from "../asset/Lionel_Messi.jpg";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Secondcomment from "./Secondcomment";
const Comment = () => {
  const [active, setActive] = useState("Reply");
  const [active1, setActive1] = useState("Reply1");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div className="main_frame_content_comment">
      {active === "Reply" && (
        <div style={{ display: "flex" }}>
          <div>
            <Avatar src={img1} className="avatar_authors"></Avatar>
          </div>

          <Paper className="paper_content">
            <div style={{ display: "flex" }}>
              <div className="name_author_comment">
                <Typography>Pillifant Vern · May 20, 2021</Typography>
              </div>

              <Button aria-describedby={id} type="button" onClick={handleClick}>
                more
              </Button>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    <MenuList>
                        <MenuItem>
                        <DeleteOutlineOutlinedIcon/>
                        <Typography>report</Typography>
                        </MenuItem>
                    </MenuList>
                    <MenuList>
                        <MenuItem>
                        <ReplyAllRoundedIcon/>
                        <Typography>report</Typography>
                        </MenuItem>
                    </MenuList>
                    <MenuList>
                        <MenuItem>
                        <FlagOutlinedIcon/>
                        <Typography>report</Typography>
                        </MenuItem>
                    </MenuList>
                </Box>
                </Popper>

            <div className="frame_name_more1">
              <Typography className="name_author_comment1">
                Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                justo.Morbi ut odio.id massa id nisl venenatis lacinia. Aenean
                sit amet justo. Morbi ut odio.Praesent id massa id nisl
                venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
              </Typography>
            </div>

            <div className="frame_button_favorite_reply ">
              <Button className="button_favorite_comment1">
                <FavoriteIcon /> 220{" "}
              </Button>

              <Button
                className="button_favorite_comment2"
                onClick={() => setActive("Response")}
              >
                {" "}
                <ReplyAllRoundedIcon />{" "}
                <Typography sx={{ paddingTop: "3px", marginLeft: "5px" }}>
                  Reply
                </Typography>
              </Button>
            </div>
          </Paper>
        </div>
      )}

      {active === "Response" && (
        <div style={{ display: "flex" }}>
          <div>
            <Avatar src={img1} className="avatar_authors1"></Avatar>
          </div>

          <Paper className="paper_content">
            <div style={{ display: "flex" }}>
              <div className="name_author_comment">
                <Typography>Pillifant Vern · May 20, 2021</Typography>
              </div>

              <Button aria-describedby={id} type="button" onClick={handleClick}>
                more
              </Button>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    <MenuList>
                        <MenuItem>
                        <DeleteOutlineOutlinedIcon/>
                        <Typography>report</Typography>
                        </MenuItem>
                    </MenuList>
                    <MenuList>
                        <MenuItem>
                        <ReplyAllRoundedIcon/>
                        <Typography>report</Typography>
                        </MenuItem>
                    </MenuList>
                    <MenuList>
                        <MenuItem>
                        <FlagOutlinedIcon/>
                        <Typography>report</Typography>
                        </MenuItem>
                    </MenuList>
                </Box>
                </Popper>

            <div className="frame_name_more1">
              <Typography className="name_author_comment1">
                Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                justo.Morbi ut odio.id massa id nisl venenatis lacinia. Aenean
                sit amet justo. Morbi ut odio.Praesent id massa id nisl
                venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
              </Typography>
            </div>

            <div className="frame_text_reply_comment">
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Add to discussion"
                className="textarea_comment"
                minRows={4}
              />
              <div className="frame_button_cancle_submit_reply">
                <Button className="button_favorite_comment3">Submit</Button>
                <Button
                  className="button_favorite_comment"
                  onClick={() => setActive("Reply")}
                >
                  Cancle
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        <Secondcomment />
      </div>
    </div>
  );
};

export default Comment;
