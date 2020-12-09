import React, { useState, useEffect } from "react";

import Home from "./Home"

function HomeList() {

  let [datas, setDatas] = useState([]);

  useEffect(() => {

    fetch('https://my-json-server.typicode.com/rajnish8869/stockdata/db')
    .then(response => response.json())
    .then(data => setDatas( data.data ));

  }, []);


      // console.log("datas",datas)

        return (
          <div>
            <h3>Popular Stocks</h3>
            <div className="heading-stock">
                <p>COMPANY</p>
                <p>MARKET PRICE</p>
            </div>
          <div >
          {datas.map(data => (
          <Home key={data.company_name} data={data} />
          ))}
          </div>
          </div>

  )
}

export default HomeList
    