import React, { useState, useEffect } from "react";

//Static
import a from "../../Static/Ad Imges/19.jpg";
import b from "../../Static/Ad Imges/20.jpg";
import c from "../../Static/Ad Imges/21.jpg";
import d from "../../Static/Ad Imges/22.jpg";
import e from "../../Static/Ad Imges/23.jpg";
import f from "../../Static/Ad Imges/24.jpg";
import g from "../../Static/Ad Imges/25.jpg";
import h from "../../Static/Ad Imges/26.jpg";
import i from "../../Static/Ad Imges/27.jpg";
import j from "../../Static/Ad Imges/28.jpg";
import k from "../../Static/Ad Imges/29.jpg";
import l from "../../Static/Ad Imges/30.jpg";
import m from "../../Static/Ad Imges/31.jpg";
import n from "../../Static/Ad Imges/32.jpg";
import o from "../../Static/Ad Imges/33.jpg";
import p from "../../Static/Ad Imges/34.jpg";
import q from "../../Static/Ad Imges/35.jpg";
import r from "../../Static/Ad Imges/36.jpg";

function AdBarRight() {
  const [imgIndexListState, setImgIndexListState] = useState([]);
  const allLeftImgs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r];

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
            console.log(imgIndexListState);
            let imgtoGen = allLeftImgs[imgNum];
            return (
              <div className="ad-bar-img">
                <a
                  href="https://www.highrevenuegate.com/rqnrc7hym?key=760a4b1b6bf0c2bfa361136346dd0673"
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

export default AdBarRight;

// atOptions = {
// 	'key' : 'a827929eaf970d6b39e28732f40f6fec',
// 	'format' : 'iframe',
// 	'height' : 250,
// 	'width' : 300,
// 	'params' : {}
// };
// document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplaynetwork.com/a827929eaf970d6b39e28732f40f6fec/invoke.js"></scr' + 'ipt>');
