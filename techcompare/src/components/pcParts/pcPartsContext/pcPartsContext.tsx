import React, { createContext, useState, useContext } from "react";

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

export const PcPartsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [processor, isProcessor] = useState<string>("All");
  const [gpu, isGpu] = useState<string>("All");
  return (
    <PcPartsContext.Provider value={{ processor, isProcessor, gpu, isGpu }}>
      {children}
    </PcPartsContext.Provider>
  );
};

export const usePcPartsContext = () => {
  const context = useContext(PcPartsContext);
  if (!context)
    throw new Error("usePcPartsContext must be used within PcPartsProvider");
  return context;
};
