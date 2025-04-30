import React, { useState, useEffect } from "react";
import api from "../../../axiosConfig/api";

interface Gpu {
  _id: string;
  name: string;
  vram: number;
  fp32: number;
  memoryBandwith: number;
  clockSpeed: number;
}

interface ApiResponseGpu {
  data: Gpu[];
  message: string;
}

const gpuOptions = () => {
  const [isGpu, setIsGpu] = useState<Gpu[]>([]);

  const fetchGpu = async () => {
    try {
      const response = await api.get<ApiResponseGpu>("/api/v1/gpu/getAllGpu");

      setIsGpu(response.data.data || []);
      console.log(response.data.data);
    } catch (error) {
      console.error("unable to fetch Gpu's", error);
    }
  };

  useEffect(() => {
    fetchGpu();
  }, []);

  return (
    <div>
      <div className="border-b border-gray-100">
        <div className="py-1">
          {isGpu.map((gpu) => {
            return (
              <div
                key={gpu._id}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                <button className="font-medium"> {gpu.name}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default gpuOptions;
