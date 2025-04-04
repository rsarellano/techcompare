import React from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";

const BuildPcParts = () => {
  return (
    <div>
      <button>
        <img className="w-[50px] h-[50px]" src={AddSquareSvg} alt="" />
      </button>
    </div>
  );
};

export default BuildPcParts;
