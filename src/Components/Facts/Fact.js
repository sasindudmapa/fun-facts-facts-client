import React, { useState, useEffect } from "react";
import linkImg from "../../Static/link-building.png";

function Fact({ title, fact, moreInfo, mobile }) {
  //state of screen
  const [mobiled, setMobiled] = useState(mobile);
  //model redirecting setup
  const [redirectedIcon, setRedirectedIcon] = useState(false);
  //when redirecting false linkicon link should be an ad
  const [linkIconLink, setLinkIconLink] = useState(
    "https://www.highrevenuegate.com/yizs1uup?key=2ccb478768cae5aab858e567eef66939"
  );

  //MORE INFO ICON AD HANDLE
  useEffect(() => {
    if (redirectedIcon) {
      //if user has clicked the ad in linkIcon once then the link changes to the right one
      setLinkIconLink(moreInfo);
    }
  }, [redirectedIcon]);

  //MOBILE IMAGE AD HANDLE
  const mobileAdLink = "sd";
  const mobileAdImgSrc = "sd";

  return (
    <div className="fact-box-wrap-with-ad-mobile">
      <div className="fact-box-wrap">
        <div className="fact-box">
          <p className="fact-title">{title}</p>
          <p className="fact-description">{fact}</p>
          <div className="fact-more-info-wrap">
            <a
              href={linkIconLink}
              target="_blank"
              onClick={() => {
                setRedirectedIcon(true);
              }}
            >
              <img src={linkImg} alt="" className="fact-more-info-link-img" />
            </a>
          </div>
        </div>
      </div>
      {mobiled ? (
        <div className="mobile-ad-after-fact">
          <a href={mobileAdLink}>
            <img src={mobileAdImgSrc} alt="" className="mobile-ad-img" />
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default Fact;
