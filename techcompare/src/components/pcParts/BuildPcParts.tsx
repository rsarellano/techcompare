import React, { useState, useEffect } from "react";
import AddSquareSvg from "../../assets/images/add-square-svgrepo-com.svg";
import api from "../../axiosConfig/api";
import "../../index.css";
import ProcessorOptions from "./pcPartsOptions/processorOptions";
import GpuOptions from "./pcPartsOptions/gpuOptions";

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

interface Gpu {
  id: string;
  vram: number;
  name: string;
  fp32: number;
  memoryBandwidth: number;
  clockSpeed: number;
}

interface ApiResponseProcessor {
  data: Processor[];
  message: string;
}

interface ApiResponseGpu {
  data: Gpu[];
  message: string;
}

const BuildPcParts = () => {
  const [pcParts, setPcParts] = useState<any>([null]);
  const [showParts, setShowParts] = useState(false);

  //processors
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const [isProcessors, setIsProcessors] = useState<Processor[]>([]);
  // const [isGpu, setIsGpu] = useState<Gpu[]>([]);
  const [showProcessors, setShowProcessors] = useState(false);

  // const fetchProcessors = async () => {
  //   try {
  //     const response = await api.get<ApiResponseProcessor>(
  //       "/api/v1/processor/getAllProcessors"
  //     );
  //     setIsProcessors(response.data.data || []);
  //     console.log(response.data || []);
  //   } catch (error) {
  //     console.error("failed to fetch processors", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProcessors();
  // }, []);

  /////

  //GPU
  // const fetchGpu = async () => {
  //   try {
  //     const response = await api.get<ApiResponseGpu>("/api/v1/gpu/getAllGpu");
  //     setIsGpu(response.data.data || []);
  //     console.log(response.data || []);
  //   } catch (error) {
  //     console.error(" failed to fetch GPUs", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchGpu();
  // }, []);

  ///

  const toggleDropdown = (field: string) => {
    setActiveDropdown(activeDropdown === field ? null : field);
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
        <div>{/* <ProcessorOptions /> */}</div>
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
                    onClick={() => toggleDropdown(field)}
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
          {activeDropdown && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
              {/* Processors Section */}
              <div className="border-b border-gray-100">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Processors
                </div>
                <div className="py-1">
                  <ProcessorOptions />
                </div>
              </div>

              {/* GPUs Section */}
              <div className="border-b border-gray-100">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  GPUs
                </div>
                <GpuOptions />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildPcParts;
