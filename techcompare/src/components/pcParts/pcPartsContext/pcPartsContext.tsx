import React, { createContext } from "react";

interface PcPartsContextType {
  processor: string;
  isProcessor: React.Dispatch<React.SetStateAction<string>>;
  gpu: string;
  isGpu: React.Dispatch<React.SetStateAction<string>>;
}

const PcPartsContext = createContext<PcPartsContextType>({
  processor: "All",
  isProcessor: () => {},
  gpu: "All",
  isGpu: () => {},
});

const pcPartsContext = () => {
  return <div>processorContext</div>;
};

export default pcPartsContext;
