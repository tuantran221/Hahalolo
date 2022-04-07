import React from 'react'
import {connect } from "react-redux"
import {unsetClient} from "../redux/client/actions"
const Home = ({unsetClient}) => {
    console.log("home")
  return (
    <div>
        <button onClick={unsetClient}>
            LOGOUT
        </button>
    </div>
  )
}

export default connect(null, {unsetClient}) (Home);