import React from "react";
import Helmet from "../components/Helmet";

import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import im from "../asset/pngegg.png";

const Forgotpass = () => {
  return (
    <Helmet title="Login">
      <div className="main_frame_login_forgot">
        <div className="Top_frame_forgot">
          <div className="sub_Frame_forgot">
            <div className="frame_img_text">
              <div>
                <img src={im} className="imglock" />
              </div>
              <Typography className="title_forgot">Forgot password</Typography>
            </div>
            <Typography
              sx={{ textAlign: "center", fontSize: "15px", fontWeight: "500" }}
            >
              We will sent reset password introduction to your Email
            </Typography>

            <Paper className="main_paper_forgot">
              <div className="frame_button_connect">
                {/*-_________________________________________________________ textfield______________________________________________________  */}
                <div style={{ textAlign: "left", marginTop: "30px" }}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "5px",
                    }}
                  >
                    Email address
                  </Typography>
                  <TextField
                    sx={{ display: "block", marginBottom: "30px" }}
                    className="inputtextcricle"
                    fullWidth
                    placeholder="chauhoaivu111@gmail.com"
                  ></TextField>

                  <Button className="button_login" fullWidth>
                    Continue
                  </Button>

                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "5px",
                    }}
                  >
                    Go back for{" "}
                    <Link to="/Login">
                      <span
                        style={{
                          color: "#346EC6",
                          cursor: "pointer",
                          fontWeight: "500",
                          paddingRight: "5px",
                        }}
                      >
                        Sign In
                      </span>
                    </Link>{" "}
                    /
                    <Link to="/SignUp">
                      <span
                        style={{
                          color: "#346EC6",
                          cursor: "pointer",
                          fontWeight: "500",
                          paddingLeft: "5px",
                        }}
                      >
                        SignUp
                      </span>
                    </Link>
                  </Typography>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Forgotpass;
