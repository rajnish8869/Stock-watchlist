import React, { Component } from 'react'
import { Link } from "react-router-dom";
import alina_invest1 from '../image/alina-invest1.png'
import google_logo from '../image/google-logo.png'
import Login from './Login'




export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showResults: false
    };
  }

  // Login With Google 
  loginWithGoogle = () => {
    this.setState({ showResults: true })
  }

  // collapse = () => {
  //   this.setState({ showResults: false })
  // }
  render() {
  return (
    <div>
      
      {/* <div className="box-background"></div> */}

      <nav className="navbar navbar-expand ">
        <Link to={"/"} className="navbar-brand">
          <img src={alina_invest1} alt="alina_invest" height="50px" />
          <span className="alina-logo">ALINA INVEST</span>
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to={"/homelist"} className="nav-link underline">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to={"/watch"} className="nav-link underline">
              Watchlist
            </Link>
          </li>
        </div>

        {/* {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Logout
              </Link>
            </li>
          </div>
        ) : ( */}
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-link" tabIndex="0" >
                  <button className="google-logo" onClick={this.loginWithGoogle}>
                    <img src={google_logo} alt='google logo' height="30px" />
                    <span className="google-logo-text">Contine with Google</span>
                  { this.state.showResults ? <Login /> : null }
                  </button>
                </div>
              </li>
            </div>
          {/* )} */}
          
      </nav>
    </div>
  )
}
}