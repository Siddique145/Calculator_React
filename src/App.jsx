import React from "react";
import Calculator from "./Components/calculator";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Calculator
        bgColor="bg-white"
        borderColor="border-gray-400"
        buttonColor="bg-blue-500"
        textColor="text-gray-700"
        resultColor="text-green-500"
      />
    </div>
  );
}

export default App;
