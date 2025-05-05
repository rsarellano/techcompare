import React from "react";
import { usePcPartsContext } from "../pcPartsContext/pcPartsContext";

const displayedSelectedPcParts = () => {
  const { processor } = usePcPartsContext();
  return <div>Selected Processor: {processor} </div>;
};

export default displayedSelectedPcParts;
