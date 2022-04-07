import React from "react";
import { useState } from "react";

import Helmet from "./Helmet";
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
import G from "./Grid";
import { Divider } from "@mui/material";
import img1 from "../asset/avatar.jpg";
import img2 from "../asset/Kevin_De_Bruyne.jpg";
import img3 from "../asset/Naymar-and-Nike-Split.jpg";
import img4 from "../asset/Kylian_Mbappe.jpg";
import img5 from "../asset/Lionel_Messi.jpg";
import img6 from "../asset/Home1.jpg";
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
import img11 from "../asset/img11.png"
import TextareaAutosize from "@mui/material/TextareaAutosize";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} className="frame_dialog">
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "space-between",
            right: 8,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}

      <Typography className="title_dialogtitle"> {children}</Typography>
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Dialog1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Helmet title="Home">
      <div >
        <Button sx={{textTransform:"capitalize",borderRadius:"20px",height:"50px"}} variant="outlined" onClick={handleClickOpen}>
          Other Categories <KeyboardArrowDownIcon/>
        </Button>
        <BootstrapDialog
          PaperProps={{
           
            className:"frame_paper_dialog"
          }
        
         
        }
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
         
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className="title_dialogtitle"
          >
            Discover others categories
          </BootstrapDialogTitle>

          <DialogContent dividers>
            <G col={5} smCol={1} mdCol={2}>
              <div className="frame_each_element_dialog">
                <div>
                  <img
                    src={img12}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Authors</Typography>
                  <Typography>17 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog">
                <div>
                  <img
                    src={img13}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">School</Typography>
                  <Typography>10 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog">
                <div>
                  <img
                    src={img14}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Flower</Typography>
                  <Typography>27 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog">
                <div>
                  <img
                    src={img15}
                    
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Car</Typography>
                  <Typography>24 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog">
                <div>
                  <img
                    src={img16}
                    className="img_dialog"
                    
                  />
                </div>
                <div className="frame_main_title" style={{marginRight:"-10px"}}>
                  <Typography  className ="main_title_dialog">Video</Typography>
                  <Typography>18 article</Typography>
                </div>
         
              </div>



              {/* ---------------------------------- */}
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img17}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Esports</Typography>
                  <Typography>20 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img18}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">News</Typography>
                  <Typography>1 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img19}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Beverage</Typography>
                  <Typography>4 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img20}
                    
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Beauty </Typography>
                  <Typography>11 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img21}
                    className="img_dialog"
                    
                  />
                </div>
                <div className="frame_main_title" style={{marginRight:"-10px"}}>
                  <Typography  className ="main_title_dialog">Automotive</Typography>
                  <Typography>35 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img22}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Tools</Typography>
                  <Typography>12 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img23}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Game</Typography>
                  <Typography>29 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img24}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Design</Typography>
                  <Typography>9 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img25}
                    
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Sports</Typography>
                  <Typography>19 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img26}
                    className="img_dialog"
                    
                  />
                </div>
                <div className="frame_main_title" style={{marginRight:"-10px"}}>
                  <Typography  className ="main_title_dialog">Life stle</Typography>
                  <Typography>3 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img27}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Outdoors</Typography>
                  <Typography>5 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img28}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Books</Typography>
                  <Typography>24 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img29}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Jewelry</Typography>
                  <Typography>17 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img30}
                    
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Toys</Typography>
                  <Typography>30 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img31}
                    className="img_dialog"
                    
                  />
                </div>
                <div className="frame_main_title" style={{marginRight:"-10px"}}>
                  <Typography  className ="main_title_dialog">Company</Typography>
                  <Typography>11 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img32}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Health</Typography>
                  <Typography>22 article</Typography>
                </div>
         
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img33}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Store</Typography>
                  <Typography>33 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img34}
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Music</Typography>
                  <Typography>9 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img11}
                    
                    className="img_dialog"
                  />
                </div>
                <div  className="frame_main_title">
                  <Typography className ="main_title_dialog">Industrial</Typography>
                  <Typography>29 article</Typography>
                </div>
                
              </div>
              <div className="frame_each_element_dialog1">
                <div>
                  <img
                    src={img6}
                    className="img_dialog"
                    
                  />
                </div>
                <div className="frame_main_title" style={{marginRight:"-10px"}}>
                  <Typography  className ="main_title_dialog">Garden</Typography>
                  <Typography>13 article</Typography>
                </div>
         
              </div>
             
             
              
            </G>
          </DialogContent>
          {/* <DialogActions >
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
        </BootstrapDialog>
      </div>
    </Helmet>
  );
};

export default Dialog1;
