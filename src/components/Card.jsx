import React from "react";
const Card = ({ projectName, img }) => {
  return (
    <div className="card" style={{ width: "40rem" }}>
      <img
        src={img}
        className="card-img-top"
        alt="Bonding-Game img"
        style={{ width: "100%", height: "430px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{projectName}</h5>
        <a href="#" className="btn btn-primary">
          Learn More!
        </a>
      </div>
    </div>
  );
};

export default Card;
