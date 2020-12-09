import React, { Component } from "react"
// import "./App.css"
// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import google_logo from '../image/google-logo.png'
import search from '../image/search.png'
import cross from '../image/cross.png'
import alina_invest1 from '../image/alina-invest1.png'


// firebase.initializeApp({
//   apiKey: "AIzaSyA5hX3uqnGQ03xTx6zz8Bsku896jHDCjzE",
//   authDomain: "stock-watch-list-ca327.firebaseapp.com"
// })

// Login With Google 
// function loginWithGoogle() {
//   alert("Great Shot!");
// }

class Watch extends Component {
  // state = { isSignedIn: false }
  // uiConfig = {
  //   signInFlow: "popup",
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID
  //   ],
  //   callbacks: {
  //     signInSuccess: () => false
  //   }
  // }

  // componentDidMount = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({ isSignedIn: !!user })
  //     console.log("user", user)
  //   })
  // }


  render() {
    return (
      <div>


        {/* Search Bar */}
        <div className="searchbar">
          <img src={cross} className="cross-button" alt='cross' height="32px" />
          <h1 className="line"></h1>
          <img src={search} className="search-button" alt='search' height="30px" />
          <input className="search-input" type='text' placeholder="Search stocks to add to watchlist" />
        </div>


        {/* Table Heading */}
        {/* <h3>Popular Stocks</h3>
        <div className="heading-stock">
          <p>COMPANY</p>
          <p>MARKET PRICE</p>
        </div> */}


        {/* Stock Data */}
        {/* <div className='row'>
          <div className='col-6 '>
            <img src={google_logo} alt='google logo' height="40px" />
            <small>Google</small>
          </div>
          <div className='col-6 text-right'>
            <p>$2500 <small className="usd">USD</small></p>
            <small>+$250 USD (2.33%)</small>
          </div>
        </div> */}


        {/* Middle Page Login Popup Box  */}
      
      </div>
    )
  }
}

export default Watch
