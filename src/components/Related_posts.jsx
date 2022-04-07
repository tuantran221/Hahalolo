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
// import img6 from "https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q"
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Related_posts = () => {
  return (
    <div>
       <G col={4} mdCol={2} smCol={1} gap={20}>
           <div>
               <Paper  className="main_paper_related_post" sx={{borderRadius:"20px"}}>
                   <div   className="top_img_related_post" style={{backgroundImage:`url(${img2})`}}/>
                     
    
                   <div className="frame_avatar_title_related_post">
                        <Avatar src={img2} className="frame_avatar_related_post" ></Avatar>
                        <Typography className="frame_title_related_post">Kevin De Bruyne - May 20.2022</Typography>

                   </div>

                   <di >
                       <Typography className="content_related_post">
                           To cool datacenter servers, Microsoft turn to boiling  liqui...
                       </Typography>
                   </di>
                   <div style={{display:"flex",marginTop:"10px"}}>

                        <div className="frame_two_button_left_related_post">
                            
                            <Button className="button_favorite_related_post"><FavoriteIcon/> 1.19k
                            </Button>
                            <Button className="button_favorite_related_post1"><ChatOutlinedIcon/> 39  </Button>
                        
                        
                        </div>

                        <div>
                            <IconButton><BookmarkAddedOutlinedIcon/></IconButton>
                        </div>

                   </div>

               </Paper>
           </div>
           <div>
               <Paper  className="main_paper_related_post" sx={{borderRadius:"20px"}}>
                   <div   className="top_img_related_post" style={{backgroundImage:`url(${img3})`}}/>
                     
    
                   <div className="frame_avatar_title_related_post">
                        <Avatar src={img3} className="frame_avatar_related_post" ></Avatar>
                        <Typography className="frame_title_related_post">Naymar - May 20.2022</Typography>

                   </div>

                   <di >
                       <Typography className="content_related_post">
                           To cool datacenter servers, Microsoft turn to boiling  liqui...
                       </Typography>
                   </di>
                   <div style={{display:"flex",marginTop:"10px"}}>

                        <div className="frame_two_button_left_related_post">
                            
                            <Button className="button_favorite_related_post"><FavoriteIcon/> 1.19k
                            </Button>
                            <Button className="button_favorite_related_post1"><ChatOutlinedIcon/> 39  </Button>
                        
                        
                        </div>

                        <div>
                            <IconButton><BookmarkAddedOutlinedIcon/></IconButton>
                        </div>

                   </div>

               </Paper>
           </div>
           <div>
               <Paper  className="main_paper_related_post" sx={{borderRadius:"20px"}}>
                   <div   className="top_img_related_post" style={{backgroundImage:`url(${img4})`}}/>
                     
    
                   <div className="frame_avatar_title_related_post">
                        <Avatar src={img4} className="frame_avatar_related_post" ></Avatar>
                        <Typography className="frame_title_related_post">Kylian Mbappe - May 20.2022</Typography>

                   </div>

                   <di >
                       <Typography className="content_related_post">
                           To cool datacenter servers, Microsoft turn to boiling  liqui...
                       </Typography>
                   </di>
                   <div style={{display:"flex",marginTop:"10px"}}>

                        <div className="frame_two_button_left_related_post">
                            
                            <Button className="button_favorite_related_post"><FavoriteIcon/> 1.19k
                            </Button>
                            <Button className="button_favorite_related_post1"><ChatOutlinedIcon/> 39  </Button>
                        
                        
                        </div>

                        <div>
                            <IconButton><BookmarkAddedOutlinedIcon/></IconButton>
                        </div>

                   </div>

               </Paper>
           </div>
           <div>
               <Paper  className="main_paper_related_post" sx={{borderRadius:"20px"}}>
                   <div   className="top_img_related_post" style={{backgroundImage:`url(${img5})`}}/>
                     
    
                   <div className="frame_avatar_title_related_post">
                        <Avatar src={img5} className="frame_avatar_related_post" ></Avatar>
                        <Typography className="frame_title_related_post">Lionel Messi - May 20.2022</Typography>

                   </div>

                   <di >
                       <Typography className="content_related_post">
                           To cool datacenter servers, Microsoft turn to boiling  liqui...
                       </Typography>
                   </di>
                   <div style={{display:"flex",marginTop:"10px"}}>

                        <div className="frame_two_button_left_related_post">
                            
                            <Button className="button_favorite_related_post"><FavoriteIcon/> 1.19k
                            </Button>
                            <Button className="button_favorite_related_post1"><ChatOutlinedIcon/> 39  </Button>
                        
                        
                        </div>

                        <div>
                            <IconButton><BookmarkAddedOutlinedIcon/></IconButton>
                        </div>

                   </div>

               </Paper>
           </div>


       </G>

       
    </div>
  );
};

export default Related_posts;
