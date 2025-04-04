import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DisplayParts from "./components/pcParts/displayParts";
import Homepage from "./pages/homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
