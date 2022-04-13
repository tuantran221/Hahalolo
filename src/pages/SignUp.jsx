import React from "react";
import Helmet from "../components/Helmet";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

import { Button, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Login = () => {
  return (
    <Helmet title="Login">
      <div className="main_frame_login">
        <div className="Top_frame">
          <div className="sub_Frame">
            <Typography
              sx={{
                textAlign: "center",
                paddingTop: "6%",
                fontWeight: "900",
                fontSize: "50px",
              }}
            >
              <PersonAddAltIcon
                sx={{ fontSize: "50px", marginRight: "30px" }}
              />
              Sign In
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Welcome to our blog magazine Community
            </Typography>

            <Paper className="main_paper">
              <div className="frame_button_connect">
                <Button className="button1">
                  <FacebookIcon />

                  <Typography className="text_in_button1">
                    Continue with facebook
                  </Typography>
                </Button>

                <Button className="button2">
                  <img src="https://chisnghiax.com/ncmaz/assets/Google.e6e5ddf2.svg" />

                  <Typography className="text_in_button">
                    Continue with Google
                  </Typography>
                </Button>

                <Button className="button2">
                  <TwitterIcon sx={{ color: "#629CF4" }} />

                  <Typography className="text_in_button">
                    Continue with Twitter
                  </Typography>
                </Button>

                <div style={{ display: "flex", marginTop: "30px" }}>
                  <hr
                    style={{
                      width: "43%",
                      height: "2px",
                      marginTop: "20px",
                      backgroundColor: "#DBDCDD",
                      border: "none",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "10px",
                    }}
                  >
                    OR
                  </Typography>
                  <hr
                    style={{
                      width: "43%",
                      height: "2px",
                      marginTop: "20px",
                      backgroundColor: "#DBDCDD",
                      border: "none",
                    }}
                  />
                </div>

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
                    sx={{ display: "block" }}
                    className="inputtextcricle"
                    fullWidth
                    placeholder="chauhoaivu111@gmail.com"
                  ></TextField>

                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      marginTop: "30px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                        marginBottom: "5px",
                      }}
                    >
                      Password
                    </Typography>

                    {/* <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginBottom: "5px",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          color: "#346EC6",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                      >
                        Forgot password?
                      </span>
                    </Typography> */}
                  </div>
                  <TextField
                    sx={{ display: "block", marginBottom: "30px" }}
                    className="inputtextcricle"
                    fullWidth
                  ></TextField>

                  <Button
                   className="button_login"
                    fullWidth
                  >
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
                    Already have an account?{" "}
                    <Link to="/Login">
                      <span
                        style={{
                          color: "#346EC6",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                      >
                        Sign In
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

export default Login;
