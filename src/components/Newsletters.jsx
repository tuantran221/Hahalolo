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
import img11 from "../asset/img11.png";
import img12 from "../asset/img12.webp";
import img13 from "../asset/img13.webp";
import img14 from "../asset/img14.jpg";
import img15 from "../asset/img15.png";
import img16 from "../asset/img16.jpg";
import img17 from "../asset/img17.jpg";
import img18 from "../asset/img18.png";
import img19 from "../asset/img19.png";
import img20 from "../asset/img20.jpg";
import img21 from "../asset/img21.jpg";
import img22 from "../asset/img22.jpg";
import img23 from "../asset/img23.jpg";
import img24 from "../asset/img24.png";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { TextField } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

const Newsletters = () => {
  return (
    <div className="main_frame_newsletters">
      <G col={2} smCol={1} mdCol={1} gap ={10}>
        <div className="frame_left_element_newsletters">
          <div>
            <Typography className="title_newsletters">Join our newsletters 🎉 </Typography><br/>
            <Typography className="sub_title_Newsletters">
              Read and share new perspectives on just about any topic.
              Everyone's welcome.
            </Typography>
          </div>
          <br/>

          <div className="frame_01_title" >
            <Typography className="button_newsletters" >01</Typography>
            <Typography  className="title_01_newsletters" >Get more discount</Typography>
          </div>

            <br/>
          <div  className="frame_01_title">
          <Typography className="button_newsletters1" >02</Typography> 
            <Typography  className="title_01_newsletters">Get premium magaizines</Typography>
          </div>

          <div>
            <TextField
              sx={{ marginTop: "30px", marginRight: "50px" }}
              //  fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Enter your Email"
              InputProps={{
                style: {
                  borderRadius: 50,
                  paddingLeft: "50px",
                  fontSize: 15,
                  

                
                },

                className:"text_field",

                endAdornment: (
                  <IconButton>
                    <ArrowForwardSharpIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>

        <div>
          <img
            src="https://chisnghiax.com/ncmaz/assets/SVG-subcribe2.2e868cd7.png"
            className="style_img_newsletter"
          />
        </div>
      </G>
    </div>
  );
};

export default Newsletters;
