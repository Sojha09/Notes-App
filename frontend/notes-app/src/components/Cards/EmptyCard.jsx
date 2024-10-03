import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <img
        src={imgSrc}
        alt="No notes"
        style={{
          maxWidth: "200%",
          maxHeight: "400px", // Adjust this as needed
          objectFit: "contain", // Ensure the image scales correctly
        }}
      />
      <p>{message}</p>
    </div>
  );
};

export default EmptyCard;
