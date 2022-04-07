import React from "react";
import { useState } from "react";

import Helmet from "../components/Helmet";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import avt from "../asset/avatar.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Button,
  IconButton,
  LinearProgress,
  Typography,
  Popper,
  MenuItem,
  MenuList,
  Card,
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
import img6 from "../asset/Home1.jpg";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import Dialog2 from "../components/Dialog2";
import Selected from "../components/Selected";
import Related_posts from "../components/Related_posts";
import Moreauthor from "../components/Moreauthor";
import HomePost from "../components/HomePost";
import Pagination from "@mui/material/Pagination";
import Topic from "../components/Topic";
import SlideShow from "../components/SlideShow";

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
import img25 from "../asset/img25.png";
import img26 from "../asset/img26.webp";
import img27 from "../asset/img27.webp";
import img28 from "../asset/img28.jpg";
import img29 from "../asset/img29.jpg";
import img30 from "../asset/img30.webp";
import img31 from "../asset/img31.jpg";
import img32 from "../asset/img32.jpg";
import img33 from "../asset/img33.png";
import img34 from "../asset/img34.jpg";
import Newsletters from "../components/Newsletters";
import Dialog1 from "../components/Dialog1";

const dataTop = [
  { url: img21, url1: img1,name:"Ronaldo" },
  { url: img22, url1: img2,name:"De Bruyne" },
  { url: img24, url1: img3,name:"Neymar" },
  { url: img30, url1: img4,name:"Mbappé" },
  { url: img29, url1: img5,name:"Messi" },
  { url: img33, url1: img13,name:"Kendavis" },
  { url: img26, url1: img12,name:"Drew" },
];

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="main_frame_Home">
        <div
          className="img_background_top"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <Typography className="title_background_Home">Garden</Typography>
          <Typography className="title_background_Home1">
            {" "}
            13 Articles
          </Typography>
        </div>

        <G col={2} smCol={1}>
          <div className="frame_selected_right1">
            <Dialog1 />
            <Dialog2 />
          </div>
          <div className="frame_selected_right">
            <Selected />
          </div>
        </G>
        <div>
          <HomePost />
        </div>

        <div className="frame_stack">
          <Stack spacing={2}>
            <Pagination
              className="frame_stack1"
              size="large"
              count={5}
              color="primary"
            />
          </Stack>
        </div>

        <div className="frame_trending_topic">
          <Topic />
        </div>
        <div className="slideShow_more_author">
          <div className="Second_slideShow_more_author">
            <div className="main_frame_video">
              <Typography className="title_video_trending">
                Top elite authors
              </Typography>
              <Typography className="title_video_trending1">
                Discover over our eliter writers
              </Typography>
            </div>

            <SlideShow data={dataTop} />
          </div>
        </div>

        <div className="frame_newsletter_home">
         <Newsletters/>


        </div>
      </div>
    </Helmet>
  );
};

export default Home;
