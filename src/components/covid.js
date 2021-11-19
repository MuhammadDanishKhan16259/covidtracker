import React, { useEffect, useState } from "react";
import "./covid.css";
const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://api.covidtracking.com/v1/states/current.json"
      );
      //   console.log(res);
      const actualData = await res.json();
      console.log(actualData[2]);
      setData(actualData[2]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1>LIVE</h1>
        <h2>COVID-19 CORNOAVIRUS</h2>
        <ul>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span> OUR </span>
                  COUNTRTY
                </p>
                <p className="card_total card_small">PAKISTAN</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_maini">
              <div className="card_inner">
                <p className="card_name">
                  <span> TOTAL </span>
                  RECOVERED
                </p>
                <p className="card_total card_small">{data.recovered}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_mainn">
              <div className="card_inner">
                <p className="card_name">
                  <span> TOTAL </span>
                  CONFIRMED
                </p>
                <p className="card_total card_small">{data.probableCases}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_mainu">
              <div className="card_inner">
                <p className="card_name">
                  <span> TOTAL </span>
                  DEATHS
                </p>
                <p className="card_total card_small">{data.death}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_maink">
              <div className="card_inner">
                <p className="card_name">
                  <span> TOTAL </span>
                  ACTIVE
                </p>
                <p className="card_total card_small">
                  {data.hospitalizedCurrently}
                </p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_mainp">
              <div className="card_inner">
                <p className="card_name">
                  <span> LAST </span>
                  UPDATED
                </p>
                <p className="card_total card_small">{data.checkTimeEt}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
