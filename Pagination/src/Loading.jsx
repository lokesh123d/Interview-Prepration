import React from "react";


const Loader = ({props}) => {
   
    
  return (
    <div className="loader-container" style={{display:props}}   >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;