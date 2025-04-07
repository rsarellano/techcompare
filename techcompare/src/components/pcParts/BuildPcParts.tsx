import React, { useState, useEffect } from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";
import api from "../../axiosConfig/api";
import "../../index.css";

const BuildPcParts = () => {
  const [showParts, isShowParts] = useState(false);

  const handleClickShowParts = () => {
    isShowParts(true);
  };

  const fetchPCParts = async () => {
    try {
      const response = await api.get("/api/v1/storedPcParts/displayPcParts");
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPCParts();
  }, []);

  return (
    <div>
      <div>
        <button className="add-pc-parts-button">Select Part</button>
      </div>
      <div>
        <button className="comic-button">Processor</button>
      </div>
    </div>
  );
};

export default BuildPcParts;
