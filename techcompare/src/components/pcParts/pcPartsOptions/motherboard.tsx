import React from "react";

interface Motherboard {
  _id: string;
  brand: string;
  name: string;
}

interface ApiResponseMotherboard {
  data: Motherboard[];
  message: string;
}

const motherboard = () => {
  return <div>motherboard</div>;
};

export default motherboard;
