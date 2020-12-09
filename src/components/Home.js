import React from 'react'

// import google_logo from '../image/google-logo.png'


const Home = ({data: {company_name, share_price, percent_fluctuate, rise_fall, icon_url}}) => {

    return (
        <div>

            <div className='row'>
                <div className='col-6 '>
                  <img src={icon_url} alt='google logo' height="40px"/>
                  <small>{company_name}</small>
                </div>
                <div className='col-6 text-right'>
                    <p>{share_price} <small className="usd">USD</small></p>
                    <small>{rise_fall}{percent_fluctuate}</small>
                </div>
            </div>
        </div>
    )
}
 export default Home