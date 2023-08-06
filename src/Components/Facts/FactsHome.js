import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { factsUrl } from "../../Utils/axios";

//components
import Fact from "./Fact";
import AdBarRight from "../Ad/AdBarRight";
import AdBarLeft from "../Ad/AdBarLeft";
import Footer from "../Footer";

//static
import closeIco from "../../Static/close.png";
import logo from "../../Static/logo1.png";

function FactsHome() {
  //model redirecting setup
  const [redirectedModel, setRedirectedModel] = useState(false);
  //when redirecting false model link should be an ad
  const [modelLink, setModelLink] = useState(
    "https://www.highrevenuegate.com/us3t0496?key=db67e172c887b2394b4229203da2bb1d"
  );
  //model active status
  const [modelActive, setModelActive] = useState(false);
  //fetched facts
  const [fetchedFacts, setFetchedFacts] = useState(undefined);
  //refresh and get new facts
  const [refresh, setRefresh] = useState(false);
  //size of screen for ads
  const [mobile, setMobile] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  //link name from url
  const { name } = useParams();

  //fetch 10 random facts at start and when user click refresh
  useEffect(() => {
    async function fetchFacts() {
      const res = await factsUrl.get("/get/facts/random");
      setFetchedFacts(res.data);
    }
    fetchFacts();
  }, [refresh]);

  //change model active status
  useEffect(() => {
    if (name !== "home") {
      setModelActive(true);
    }
  }, []);

  useEffect(() => {
    if (redirectedModel) {
      //if user has clicked the ad once then the link changes to the right one
      setModelLink(`/search/${name}`);
    }
  }, [redirectedModel]);

  // CHANG APP TO MOBILE
  useEffect(() => {
    if (window.innerWidth <= 980) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <div>
      <div className="model-wrap-wrap">
        {modelActive ? (
          // theres a link
          <div className="model-wrap">
            <div className="model-exists">
              <div
                className="model-close-btn"
                onClick={() => {
                  setModelActive(false);
                }}
              >
                <img src={closeIco} alt="" />
              </div>
              <div className="model-content-wrap">
                <div className="model-content-vid-name">{name}</div>
                <a
                  href={`${modelLink}`}
                  target="_blank"
                  id="model-link"
                  onClick={(e) => {
                    //trigger the function to change the link direction
                    setRedirectedModel(true);
                    //changing _blank to _self
                    function setSelf() {
                      e.target.target = "_self";
                    }
                    setTimeout(setSelf, 1000);
                  }}
                >
                  Get Link
                </a>
              </div>
            </div>
          </div>
        ) : //no link
        null}
      </div>

      <div className="facts-home">
        <div className="home-header-wrap">
          <div className="home-header">
            <div className="header-logo">
              <img src={logo} alt="" className="logo-ico" />
            </div>
            <div className="header-title">Facts Pot</div>
            <div
              className="home-refresh-btn"
              onClick={() => {
                setRefresh(!refresh);
              }}
            >
              Refresh
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="home-ad-left">{/* <AdBarLeft /> */}</div>
          <div className="home-facts-content-wrap">
            {fetchedFacts !== undefined ? (
              <div className="fetched-facts-wrap">
                {fetchedFacts.map((factItem) => {
                  return (
                    <Fact
                      title={factItem.title}
                      fact={factItem.fact}
                      moreInfo={factItem.moreInfo}
                      mobile={mobile}
                    />
                  );
                })}
              </div>
            ) : (
              <div class="center loading-animation-facts">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
              </div>
            )}
          </div>
          <div className="home-ad-right">{/* <AdBarRight /> */}</div>
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FactsHome;
