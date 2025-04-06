import React, { useState } from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";

const BuildPcParts = () => {
  const [showParts, isShowParts] = useState(false);

  const handleClickShowParts = () => {
    isShowParts(true);
  };

  return (
    <div>
      <button className="flex justify-center items-center">
        <p className="w-[50px] h-[50px]"> Select Part</p>
        <img className="w-[50px] h-[50px]" src={AddSquareSvg} alt="" />
      </button>
    </div>
  );
};

export default BuildPcParts;
