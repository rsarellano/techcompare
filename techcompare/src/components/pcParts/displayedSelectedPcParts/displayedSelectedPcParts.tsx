import React from "react";
import { usePcPartsContext } from "../pcPartsContext/pcPartsContext";

const DisplayedSelectedPcParts = () => {
  const { processor } = usePcPartsContext();
  return <div>{processor} </div>;
};

export default DisplayedSelectedPcParts;
