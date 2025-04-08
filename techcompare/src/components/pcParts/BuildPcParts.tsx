import React, { useState, useEffect } from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";
import api from "../../axiosConfig/api";
import "../../index.css";

const BuildPcParts = () => {
  const [showParts, isShowParts] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickShowParts = () => {
    isShowParts(true);
  };

  const processors = [
    { name: "Processor 1", id: 1 },
    { name: "Processor 2", id: 2 },
    { name: "Processor 3", id: 3 },
    { name: "Processor 4", id: 4 },
    { name: "Processor 6", id: 5 },
  ];

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
        <button className="comic-button" onClick={toggleDropdown}>
          Processor
        </button>
      </div>

      {/* dropdown test */}

      <div>
        <div className="relative inline-block">
          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                {processors.map((processor) => (
                  <div
                    key={processor.id}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {processor.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildPcParts;
