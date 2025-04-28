import React, { useEffect, useState } from "react";

import api from "../../../axiosConfig/api";

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

interface ApiResponseProcessor {
  data: Processor[];
  message: string;
}

const processorOptions = () => {
  const [isProcessors, setIsProcessor] = useState<Processor[]>([]);

  const fetchProcessors = async () => {
    try {
      const response = await api.get<ApiResponseProcessor>(
        "/api/v1/processor/getAllProcessors"
      );
      setIsProcessor(response.data.data || []);
      console.log(response.data.data);
    } catch (error) {
      console.error("failed to fetch processor", error);
    }
  };

  useEffect(() => {
    fetchProcessors();
  }, []);

  return (
    <div>
      <div className="border-b border-gray-100">
        <div className="py-1">
          {isProcessors.map((processor) => (
            <div
              key={processor.id}
              className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
              onClick={() => {}}
            >
              {processor.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default processorOptions;
