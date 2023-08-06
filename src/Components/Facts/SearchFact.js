import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//components
import AdBarLeft from "../Ad/AdBarLeft";
import AdBarRight from "../Ad/AdBarRight";
import Footer from "../Footer";
import { factsUrl } from "../../Utils/axios";
import Fact from "./Fact";

//static
import logo from "../../Static/logo1.png";

function SearchFact() {
  //model redirecting setup
  const [redirectedBtn, setRedirectedBtn] = useState(false);
  //when redirecting false model link should be an ad
  const [btnLink, setBtnLink] = useState(
    "https://www.highrevenuegate.com/us3t0496?key=db67e172c887b2394b4229203da2bb1d"
  );
  //store search query
  const [searchQuery, setSearchQuery] = useState(undefined);
  //store fetched search results
  const [searchResults, setSearchResults] = useState("Search for something");

  //link name from url
  const { name } = useParams();

  useEffect(() => {
    if (redirectedBtn) {
      //if user has clicked the ad once then the link changes to the right one
      if (name !== "add") {
        setBtnLink(`/get/link/${name}`);
      } else {
        setBtnLink(`/add/ZXCV1919/link`);
      }
    }
  }, [redirectedBtn]);

  //fetch search item results
  function handleSearch() {
    async function fetchResults(query) {
      const res = await factsUrl.get(`search/reg/fact/${query}`);
      console.log(res.data);
      setSearchResults(res.data);
    }

    fetchResults(searchQuery);
  }

  return (
    <div className="search-page">
      <div className="search-header-wrap home-header-wrap">
        <div className="search-header home-header">
          <div className="header-logo">
            <img src={logo} alt="" className="logo-ico" />
          </div>
          <div className="header-title">Facts Pot</div>
          {name !== "home" ? (
            // theres a link
            <div className="li-exists home-refresh-btn">
              {name === "add" ? (
                <a
                  href={`${btnLink}`}
                  target="_blank"
                  id="li-link"
                  onClick={(e) => {
                    //trigger the function to change the link direction
                    setRedirectedBtn(true);
                    //changing _blank to _self
                    function setSelf() {
                      e.target.target = "_self";
                    }
                    setTimeout(setSelf, 1000);
                  }}
                >
                  Add a Link
                </a>
              ) : (
                <a
                  href={`${btnLink}`}
                  target="_blank"
                  id="li-link"
                  onClick={(e) => {
                    //trigger the function to change the link direction
                    setRedirectedBtn(true);
                    //changing _blank to _self
                    function setSelf() {
                      e.target.target = "_self";
                    }
                    setTimeout(setSelf, 1000);
                  }}
                >
                  Get Link
                </a>
              )}
            </div>
          ) : //no link
          null}
        </div>
      </div>
      <div className="search-content-mid">
        <div className="search-content-mid-top">
          <div className="search-bar">
            <input
              type="text"
              placeholder="search a fact"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
          <div className="search-btn" onClick={handleSearch}>
            Search
          </div>
        </div>
        <div className="search-content-mid-bottom home-content">
          <div className="search-ad-leftbar home-ad-left">
            <AdBarLeft />
          </div>
          <div className="search-results fetched-facts-wrap">
            {Array.isArray(searchResults) ? (
              <div className="results-exists fetched-facts-wrap">
                {searchResults.map((result) => {
                  return (
                    <Fact
                      title={result.title}
                      fact={result.fact}
                      moreInfo={result.moreInfo}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="no-results">{searchResults}</div>
            )}
          </div>
          <div className="search-ad-rightbar home-ad-right">
            <AdBarRight />
          </div>
        </div>
      </div>
      <div className="search-footer">
        <Footer />
      </div>
    </div>
  );
}

export default SearchFact;
