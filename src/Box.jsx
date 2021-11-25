/** @format */

import React from "react";

const Box = ({ classname , state , click}) => {
  return (
    <div className=''>
      <div
        className={classname}
        style={{
          height: "3rem",
          width: "3rem",
          fontSize: "3rem",
          textAlign: "center",
          padding:"5px"
        }} onClick={click}>
        {state}
      </div>
    </div>
  );
};

export default Box;
