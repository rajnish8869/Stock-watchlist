import React, { Component } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import alina_invest1 from '../image/alina-invest1.png'


firebase.initializeApp({
    apiKey: "AIzaSyA5hX3uqnGQ03xTx6zz8Bsku896jHDCjzE",
    authDomain: "stock-watch-list-ca327.firebaseapp.com"
  })

  export default class Login extends Component {

    state = { isSignedIn: false }
    uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      // console.log("user", user)
    })
  }
  render() {
    return (
<div className="login">
        <div className='row'>
          <div className='col-6 login-row1'>
            <p>Keep Track Of Your Stocks</p>
          </div>
          <div className='col-6 login-row2'>
            <div className="navbar-brand">
              <img src={alina_invest1} alt="alina_invest" height="50px" />
              <span className="alina-logo">ALINA INVEST</span>
              <div>
                {/* <button className="google-logo" onClick={loginWithGoogle}>
                  <img src={google_logo} alt='google logo' height="30px" />
                  <span className="google-logo-text">Contine with Google</span>
                </button> */}
              </div>
              
              <>

                {this.state.isSignedIn ? (
                  <span>
                    <div>Signed In!</div>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    <img
                      alt="profile picture"
                      src={firebase.auth().currentUser.photoURL}
                    />
                  </span>
                ) : (
                    <StyledFirebaseAuth
                      uiConfig={this.uiConfig}
                      firebaseAuth={firebase.auth()}
                    />
                  )}
              </>
            </div>
          </div>
        </div>
      </div>
    )
}
}

