import React from "react";

function GenLinkModel({ generatedLink }) {
  return (
    <div>
      <p>Here is your link!</p>
      <p>{generatedLink}</p>
      <a href={generatedLink}>Go To Your Link</a>
    </div>
  );
}

export default GenLinkModel;
