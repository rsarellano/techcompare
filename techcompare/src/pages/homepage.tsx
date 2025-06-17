import React from "react";
import DisplayParts from "../components/pcParts/displayParts";

const homepage: React.FC = () => {
  return (
    <div>
      <div className="container w-3">
      homepage
      <div  className="w-[600px] h-[700px]">
        <DisplayParts />
      </div>

      </div>
     
    </div>
  );
};

export default homepage;
