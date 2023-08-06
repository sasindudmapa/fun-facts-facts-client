import React, { useEffect, useState } from "react";

// Static
import A from "../../Static/Ad Imges/1.jpg";
import B from "../../Static/Ad Imges/2.jpg";
import C from "../../Static/Ad Imges/3.jpg";
import D from "../../Static/Ad Imges/4.jpg";
import E from "../../Static/Ad Imges/6.jpg";
import F from "../../Static/Ad Imges/7.jpg";
import G from "../../Static/Ad Imges/8.jpg";
import H from "../../Static/Ad Imges/9.jpg";
import I from "../../Static/Ad Imges/10.jpg";
import J from "../../Static/Ad Imges/11.jpg";
import K from "../../Static/Ad Imges/12.jpg";
import L from "../../Static/Ad Imges/13.jpg";
import M from "../../Static/Ad Imges/14.jpg";
import N from "../../Static/Ad Imges/15.jpg";
import O from "../../Static/Ad Imges/16.jpg";
import P from "../../Static/Ad Imges/17.jpg";
import Q from "../../Static/Ad Imges/18.jpg";
import R from "../../Static/Ad Imges/5.jpg";

function AdBarLeft() {
  const [imgIndexListState, setImgIndexListState] = useState([]);

  const allLeftImgs = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R];

  useEffect(() => {
    let imgIndexList = [];
    while (imgIndexList.length < 4) {
      let ranNum = Math.floor(Math.random() * 17);
      if (!imgIndexList.includes(ranNum)) {
        imgIndexList.push(ranNum);
      }
    }
    setImgIndexListState(imgIndexList);
  }, []);

  return (
    <div className="ad-bar-wrap-wrap">
      {imgIndexListState.length !== 0 ? (
        <div className="ad-bar-wrap">
          {imgIndexListState.map((imgNum) => {
            let imgtoGen = allLeftImgs[imgNum];
            return (
              <div className="ad-bar-img">
                <a
                  href="https://www.highrevenuegate.com/us3t0496?key=db67e172c887b2394b4229203da2bb1d"
                  target="_blank"
                >
                  <img src={imgtoGen} alt="Adsterra" />
                </a>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default AdBarLeft;
