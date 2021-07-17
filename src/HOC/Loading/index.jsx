import React from "react";

function Loading(props) {
  return (
    <div className="spinner__container">
      <div className="spinner">
        <div className="spinner-item" />
        <div className="spinner-item" />
        <div className="spinner-item" />
      </div>
    </div>
  );
}

export default Loading;
