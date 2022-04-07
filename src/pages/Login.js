import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Messages from '../redux/notifications/Messages'
import Errors from '../redux/notifications/Errors'
import loginRequest from '../redux/login/actions'

// If you were testing, you'd want to export this component
// so that you can test your custom made component and not
// test whether or not Redux and Redux Form are doing their jobs
class Login extends Component {
  // Pass the correct proptypes in for validation
  static propTypes = {
    handleSubmit: PropTypes.func,
    loginRequest: PropTypes.func,
    login: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array,
    }),
  }

  // Remember, Redux Form passes the form values to our handler
  // In this case it will be an object with `email` and `password`
  submit = (values) => {
    this.props.loginRequest(values)
  }

  render () {
    const {
      handleSubmit, // remember, Redux Form injects this into our props
      login: {
        requesting,
        successful,
        messages,
        errors,
      },
    } = this.props

    return (
      <div className="login">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>LOGIN</h1>
          <label htmlFor="email">Email</label>
          {/*
            Our Redux Form Field components that bind email and password
            to our Redux state's form -> login piece of state.
          */}
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            component="input"
          />
          <button action="  ">LOGIN</button>
        </form>
        <div className="auth-messages">
          {/* As in the signup, we're just using the message and error helpers */}
          {!requesting && !!errors.length && (
            <Errors message="Failure to login due to:" errors={errors} />
          )}
          {!requesting && !!messages.length && (
            <Messages messages={messages} />
          )}
          {requesting && <div>Logging in...</div>}
          {!requesting && !successful && (
            <Link to="/signup">Need to Signup? Click Here »</Link>
          )}
        </div>
      </div>
    )
  }
}

// Grab only the piece of state we need
const mapStateToProps = state => ({
  login: state.login,
})

// make Redux state piece of `login` and our action `loginRequest`
// available in this.props within our component
const connected = connect(mapStateToProps, { loginRequest })(Login)

// in our Redux's state, this form will be available in 'form.login'
const formed = reduxForm({
  form: 'login',
})(connected)

// Export our well formed login component
export default formed
// import React, { Component, PropTypes } from 'react'
// import { reduxForm, Field } from 'redux-form'
// import { connect } from 'react-redux'

// import Messages from '../redux/notifications/Messages'
// import Errors from '../redux/notifications/Errors'
// import loginRequest from '../redux/login/actions'
// import Helmet from "../components/Helmet";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { TextField } from "@mui/material";
// import { Button, Typography } from "@mui/material";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { Link } from "react-dom";

// const Login = () => {
//   return (
//     <Helmet title="Login">
//       <div className="main_frame_login">
//         <div className="Top_frame">
//           <div className="sub_Frame">
//             <Typography
//               sx={{
//                 textAlign: "center",
//                 paddingTop: "6%",
//                 fontWeight: "900",
//                 fontSize: "50px",
//               }}
//             >
//               <PersonOutlineIcon
//                 sx={{ fontSize: "50px", marginRight: "30px" }}
//               />
//               Login
//             </Typography>
//             <Typography sx={{ textAlign: "center" }}>
//               Welcome to our blog magazine Community
//             </Typography>

//             <Paper className="main_paper">
//               <div className="frame_button_connect">
//                 <Button className="button1">
//                   <FacebookIcon />

//                   <Typography className="text_in_button1">
//                     Continue with facebook
//                   </Typography>
//                 </Button>

//                 <Button className="button2">
//                   <img src="https://chisnghiax.com/ncmaz/assets/Google.e6e5ddf2.svg" />

//                   <Typography className="text_in_button">
//                     Continue with Google
//                   </Typography>
//                 </Button>

//                 <Button className="button2">
//                   <TwitterIcon sx={{ color: "#629CF4" }} />

//                   <Typography className="text_in_button">
//                     Continue with Twitter
//                   </Typography>
//                 </Button>

//                 <div style={{ display: "flex", marginTop: "30px" }}>
//                   <hr
//                     style={{
//                       width: "43%",
//                       height: "2px",
//                       marginTop: "20px",
//                       backgroundColor: "#DBDCDD",
//                       border: "none",
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "15px",
//                       fontWeight: "600",
//                       marginLeft: "15px",
//                       marginRight: "15px",
//                       marginTop: "10px",
//                     }}
//                   >
//                     OR
//                   </Typography>
//                   <hr
//                     style={{
//                       width: "43%",
//                       height: "2px",
//                       marginTop: "20px",
//                       backgroundColor: "#DBDCDD",
//                       border: "none",
//                     }}
//                   />
//                 </div>

//                 {/*-_________________________________________________________ textfield______________________________________________________  */}
//                 <div style={{ textAlign: "left", marginTop: "30px" }}>
//                   <Typography
//                     sx={{
//                       fontSize: "15px",
//                       fontWeight: "500",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     Email address
//                   </Typography>
//                   <TextField
//                     sx={{ display: "block" }}
//                     className="inputtextcricle"
//                     fullWidth
//                     placeholder="chauhoaivu111@gmail.com"
//                   ></TextField>

//                   <div
//                     style={{
//                       justifyContent: "space-between",
//                       display: "flex",
//                       marginTop: "30px",
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontSize: "15px",
//                         fontWeight: "500",
//                         marginBottom: "5px",
//                       }}
//                     >
//                       Password
//                     </Typography>

//                     <Typography
//                       sx={{
//                         textAlign: "right",
//                         fontSize: "15px",
//                         fontWeight: "500",
//                         marginBottom: "5px",
//                       }}
//                     >
//                       {" "}
//                       <Link to="/Forgotpass">
//                         <span
//                           style={{
//                             color: "#346EC6",
//                             cursor: "pointer",
//                             fontWeight: "500",
//                           }}
//                         >
//                           Forgot password?
//                         </span>
//                       </Link>
//                     </Typography>
//                   </div>
//                   <TextField
//                     sx={{ display: "block", marginBottom: "30px" }}
//                     className="inputtextcricle"
//                     fullWidth
//                   ></TextField>

//                   <Button
                  
//                     className="button_login"
//                     fullWidth
//                   >
//                     Continue
//                   </Button>

//                   <Typography
//                     sx={{
//                       textAlign: "center",
//                       fontSize: "15px",
//                       fontWeight: "500",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     New user?{" "}
//                     <Link to="/SignUp">
//                       <span
//                         style={{
//                           color: "#346EC6",
//                           cursor: "pointer",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Create an account
//                       </span>
//                     </Link>
//                   </Typography>
//                 </div>
//               </div>
//             </Paper>
//           </div>
//         </div>
//       </div>
//     </Helmet>
//   );
// };

// export default Login;