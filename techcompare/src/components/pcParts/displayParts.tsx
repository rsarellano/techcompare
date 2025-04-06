import React, { useState } from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";
import BuildPCParts from "./BuildPcParts";

const displayParts: React.FC = () => {
  const [isShowBuildPC, setIsShowBuildPC] = useState(false);

  const handleClickBuildPC = () => {
    setIsShowBuildPC(true);
  };

  const handleCloseBuildPC = () => {
    setIsShowBuildPC(false);
  };

  return (
    <div className="container bg-sky-600 lg:w-[400px] lg:h-[320px] flex justify-center items-center">
      {!isShowBuildPC ? (
        <div className=" selection  flex justify-center items-center ">
          <button
            className="m-5 w-[120px] h-[80px] "
            onClick={handleClickBuildPC}
          >
            <p className="text-xs">Build your PC</p>
          </button>

          <button className="m-5 w-[120px] h-[80px]">
            <p className="text-xs">Recommended Builds</p>
          </button>
        </div>
      ) : (
        <div className="bg-sky-600 lg:w-[400px] lg:h-[200px] flex justify-center items-center">
          <BuildPCParts />
        </div>
      )}
    </div>
  );
};

export default displayParts;
