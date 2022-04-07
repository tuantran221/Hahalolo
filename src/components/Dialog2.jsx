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
import img6 from "../asset/Home1.jpg";
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

const Dialog2 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Helmet title="Home">
      <div style={{marginLeft:"40px"}} >
        <Button sx={{textTransform:"capitalize",borderRadius:"20px",height:"50px"}} variant="outlined" onClick={handleClickOpen}>
          Other Tags <KeyboardArrowDownIcon/>
        </Button>
        <BootstrapDialog
          PaperProps={{
           
            className:"frame_paper_dialog1"
          }
        
         
        }
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
         
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className="title_dialogtitle1"
          >
            Discover others tags
          </BootstrapDialogTitle>

          <DialogContent dividers>
          <div >
              <Button className="button_dialog_element" >
                Garden (14)
              </Button>
              <Button  className="button_dialog_element">
                Jewelry (16)
              </Button>
              <Button className="button_dialog_element" >
                Industrial (15)
              </Button>
              <Button className="button_dialog_element" >
                Tools (21)
              </Button>
              <Button className="button_dialog_element" >
                Automotive (16)
              </Button>
            </div>

            <div className="frame_button_element_dialog" >
              <Button className="button_dialog_element" >
                Sandwich (2)
              </Button>
              <Button className="button_dialog_element" >
                Hot dog (1)
              </Button>
              <Button className="button_dialog_element" >
                Pizza (24)
              </Button>
              <Button  className="button_dialog_element">
                Hamburger (17)
              </Button>
              <Button className="button_dialog_element" >
                Gelato (19)
              </Button>
            </div>

            <div className="frame_button_element_dialog" >
              <Button className="button_dialog_element" >
                Soft Drink (5)
              </Button>
              <Button className="button_dialog_element" >
                Liqour (12)
              </Button>
              <Button className="button_dialog_element" >
                Tea (4)
              </Button>
              <Button className="button_dialog_element" >
                Milktea (7)
              </Button>
              <Button className="button_dialog_element" >
                soda (10)
              </Button>
            </div>


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

export default Dialog2;
