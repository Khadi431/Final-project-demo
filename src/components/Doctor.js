import React, { useState } from "react";

const Doctor = (props) => {
  const [show, SetShow] = useState(false);
  return (
    <div className="card col-3 m-1">
      <div className="card-body">
        <h4>Dr {props.name}</h4>
        <img
          src={props.img}
          alt="Doctor One"
          className="card-img img-fluid"
          style={{ maxHeight: 150, minHeight: 150 }}
        />
        <h5 className="text-gray">{props.type}</h5>
        <button className="btn btn-primary m-2" onClick={() => SetShow(!show)}>
          {show ? `${props.phone}` : "CALL"}
        </button>
      </div>
    </div>
  );
};

export default Doctor;
