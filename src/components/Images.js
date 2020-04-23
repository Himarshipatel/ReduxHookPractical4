import React from "react";

function Images() {
  const url =
    "https://image.shutterstock.com/image-vector/vector-panda-icon-600w-380525938.jpg";

  return (
    <div className="img">
      <img src={url} alt="" width={100} className="img" />
    </div>
  );
}
export default Images;
