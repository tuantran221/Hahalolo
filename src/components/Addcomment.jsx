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
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Addcomment = () => {
  return (
    
      <div>
      <div className="frame_comment">
        <div>
          <img className="img_avatar_comment" alt="new" src={img1} />
        </div>
        <div className="frame_title_comment">
          <Typography>WRITEN BY</Typography>
          <Typography className="size_comment_title">
            Cristiano Ronaldo
          </Typography>
          <Typography className="size_comment_title">
            There's no stopping the tech giant. Apple now opens its 100th store
            in China.There's no stopping the tech giant.Readmore
          </Typography>
        </div>
      </div>

      <div>
        <Typography  sx={{fontSize:"15px",fontWeight:"600",margin:"20px"}}>Responses (14)</Typography>
      </div>
      

      <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Add to discussion"
      className="textarea_comment"
      minRows={6}
    />

    <div style={{display:"flex"}}>

      <Button sx={{backgroundColor:"blue",color:"white",margin:"30px",borderRadius:"10px",border:"1"}} className="submit_button">Submit</Button>
      <Button sx={{backgroundColor:"white",color:"black",margin:"30px",borderRadius:"10px",border:"1px solid gray"}} className="submit_button">Cancle</Button>
    </div>




      </div>
  
  );
};

export default Addcomment;
