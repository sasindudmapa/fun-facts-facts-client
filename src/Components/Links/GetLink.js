import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../../Utils/axios";

function GetLink() {
  const [link, setLink] = useState("Please Wait");

  const { name } = useParams();

  useEffect(() => {
    async function fetchLink(name) {
      console.log(name);
      const res = await baseUrl.get(`get/link/${name}`);

      if (res.status === 200) {
        setLink(res.data.link);
      } else if (res.status === 202) {
        setLink(res.data);
      }
    }

    fetchLink(name);
  }, [name]);
  return (
    <div>
      <a href={link}>{link}</a>
    </div>
  );
}

export default GetLink;
