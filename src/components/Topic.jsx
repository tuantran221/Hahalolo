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

import TextareaAutosize from "@mui/material/TextareaAutosize";

const Topic = () => {
  return (
    <div className="main_frame_trending_topic">
      <div>
        <Typography className="title_trending_topics">
          {" "}
          Top trending Topic
        </Typography>
        <Typography className="title_trending_topics1">
          Discover over 100 Topics
        </Typography>
      </div>

      <div className="frame_element_trending_topics">
        <G col={5} mdCol={2} smCol={2} gap={20}>
          <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img25} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Garden</Typography>
                      <Typography>13 Articles</Typography>
                  </div>
              </Paper>
          </div>
          <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img26} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Jewelry</Typography>
                      <Typography>16 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img27} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Industrial</Typography>
                      <Typography>15 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img28} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Tools</Typography>
                      <Typography>21 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img29} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Automotive</Typography>
                      <Typography>16 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img30} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Toys</Typography>
                      <Typography>25 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img31} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Outdoors</Typography>
                      <Typography>14 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img32} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Health</Typography>
                      <Typography>4 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img33} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Electronics</Typography>
                      <Typography>7 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img34} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Company</Typography>
                      <Typography>26 Articles</Typography>
                  </div>
              </Paper>
          </div>
        </G>
      </div>
    </div>
  );
};

export default Topic;
