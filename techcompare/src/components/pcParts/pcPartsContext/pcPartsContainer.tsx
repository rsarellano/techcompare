import React from "react";
import { PcPartsProvider } from "./pcPartsContext";
import ProcessorOptions from "../pcPartsOptions/processorOptions";
import DisplayedSelectedPcParts from "../displayedSelectedPcParts/displayedSelectedPcParts";

const PcPartsContainer = () => {
  return (
    <PcPartsProvider>
      <div className="flex flex-col gap-4">
        <ProcessorOptions />
        <DisplayedSelectedPcParts />
      </div>
    </PcPartsProvider>
  );
};

export default PcPartsContainer;
