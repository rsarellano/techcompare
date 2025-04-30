import React, { useState, useEffect } from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";
import api from "../../axiosConfig/api";
import "../../index.css";
import ProcessorOptions from "./pcPartsOptions/processorOptions";
import GpuOptions from "./pcPartsOptions/gpuOptions";

const BuildPcParts = () => {
  const [pcParts, setPcParts] = useState<any>([null]);
  const [showParts, setShowParts] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const fetchPCParts = async () => {
    try {
      const response = await api.get("/api/v1/storedPcParts/displayPcParts");
      setPcParts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("failed to fetch PC parts", error);
    }
  };

  const handlePartSelect = (field: string) => {
    setSelectedPart(selectedPart === field ? null : field);
  };

  const toggleParts = () => {
    setShowParts(!showParts);
  };

  useEffect(() => {
    fetchPCParts();
  }, []);

  return (
    <div>
      <div>
        <button className="add-pc-parts-button" onClick={toggleParts}>
          Select Part
        </button>
      </div>
      <div className="w-[300px] h-[100px]">
        {showParts && (
          <div className="flex flex-row">
            {pcParts.fields?.map((field: string) => (
              <div key={field}>
                {
                  <button
                    className="comic-button"
                    onClick={() => handlePartSelect(field)}
                  >
                    {field}
                  </button>
                }
              </div>
            ))}
          </div>
        )}
      </div>

      {/* dropdown test */}

      <div>
        <div className="relative inline-block">
          {selectedPart && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
              <div className="border-b border-gray-100">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {selectedPart}
                </div>
                <div className="py-1">
                  {selectedPart.toLowerCase() === "processor" && (
                    <ProcessorOptions />
                  )}
                  {selectedPart.toLowerCase() === "gpu" && <GpuOptions />}
                  {selectedPart.toLowerCase() === "motherboard" && (
                    <GpuOptions />
                  )}
                  {selectedPart.toLowerCase() === "memory" && <GpuOptions />}
                  {selectedPart.toLowerCase() === "storage" && <GpuOptions />}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildPcParts;
