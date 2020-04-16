import React from "react";
//import './index.css';
function Images() {
  const url =
    "https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png";

  return (
    <div className="img">
      <img src={url} alt="" width={370} className="img" />
    </div>
  );
}
export default Images;
