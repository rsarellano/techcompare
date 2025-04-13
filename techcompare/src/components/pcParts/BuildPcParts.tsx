import React, { useState, useEffect } from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";
import api from "../../axiosConfig/api";
import "../../index.css";

interface Processor {
  id: string;
  brand: string;
  name: string;
  generation: string;
  cores: number;
  threads: number;
  clockSpeed: number;
  tdp: number;
  memorySupport: string;
  socket: string;
  price: string;
  performance: string;
}

interface ApiResponse {
  data: Processor[];
  message: string;
}

const BuildPcParts = () => {
  const [pcParts, setPcParts] = useState<any>([null]);
  const [showParts, setShowParts] = useState(false);

  //processors
  const [isProcessors, setIsProcessors] = useState<Processor[]>([]);
  const [showProcessors, setShowProcessors] = useState(false);

  const fetchProcessors = async () => {
    try {
      const response = await api.get<ApiResponse>(
        "/api/v1/processor/getAllProcessors"
      );
      setIsProcessors(response.data.data || []);
      console.log(response.data || []);
    } catch (error) {
      console.error("failed to fetch processors", error);
    }
  };

  useEffect(() => {
    fetchProcessors();
  }, []);

  /////

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleParts = () => {
    setShowParts(!showParts);
  };

  const fetchPCParts = async () => {
    try {
      const response = await api.get("/api/v1/storedPcParts/displayPcParts");
      setPcParts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("failed to fetch PC parts", error);
    }
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
      <div>
        {showParts && (
          <div>
            {pcParts.fields?.map((field: string) => (
              <div key={field}>
                {
                  <button className="comic-button" onClick={toggleDropdown}>
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
          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                {isProcessors.map((processor) => (
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
