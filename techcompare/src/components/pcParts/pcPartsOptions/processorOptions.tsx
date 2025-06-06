import React, { useEffect, useState } from "react";
import { usePcPartsContext } from "../pcPartsContext/pcPartsContext";
import api from "../../../axiosConfig/api";

interface Processor {
  _id: string;
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

const ProcessorOptions = () => {
  const [processors, setProcessors] = useState<Processor[]>([]);
  const { isProcessor } = usePcPartsContext();

  const fetchProcessors = async () => {
    try {
      const response = await api.get<ApiResponseProcessor>(
        "/api/v1/processor/getAllProcessors"
      );

      setProcessors(response.data.data || []);
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
          {processors.map((processor) => (
            <div
              key={processor._id}
              className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              <button onClick={() => isProcessor(processor.name)}>
                {processor.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessorOptions;
