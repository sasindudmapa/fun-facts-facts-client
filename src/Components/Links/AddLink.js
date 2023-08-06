import React, { useState } from "react";
import baseUrl from "../../Utils/axios";

//funs
import GenLinkModel from "./GenLinkModel";

function AddLink() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [generatedLink, setGeneratedLink] = useState(undefined);

  function handleSubmit() {
    //tells the user that the link is being uploaded to the server
    let uploadingStatus = document.getElementById("upload-status");
    uploadingStatus.style.opacity = 1;

    //function to send data to the server
    async function saveLink(data) {
      const res = await baseUrl.post(`post/link`, data);
      console.log(res.status);
      if (res.status === 201) {
        //Changing the uploading status to uploaded status
        uploadingStatus.style.backgroundColor = "green";
        uploadingStatus.innerHTML = "Successfully Uploaded";

        //getting and setting the link that was made in the server
        setGeneratedLink(res.data.generatedLink);
      } else if (res.status === 202) {
        uploadingStatus.style.backgroundColor = "red";
        uploadingStatus.innerHTML = "link name already exists";
      }
    }

    const data = {
      name: name,
      link: link,
    };

    saveLink(data);
  }

  return (
    <div className="add">
      <div className="add-form">
        <label htmlFor="link-name">Link Name: </label>
        <input
          type="text"
          id="link-name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="link-url">Link: </label>
        <input
          type="text"
          id="link-url"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <br />
        <p className="link-submit" onClick={handleSubmit}>
          Submit
        </p>
        <div id="upload-status">Uploading</div>
        <div className="gen-link-fun">
          {generatedLink === undefined ? null : (
            <div>
              <GenLinkModel generatedLink={generatedLink} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddLink;
