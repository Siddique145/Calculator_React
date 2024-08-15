import React, { useState } from "react";

function Calculator({ bgColor, borderColor, buttonColor, textColor, resultColor }) {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const handleAddition = () => setResult(num1 + num2);
  const handleSubtraction = () => setResult(num1 - num2);
  const handleMultiplication = () => setResult(num1 * num2);
  const handleDivision = () => setResult(num1 / num2);

  return (
    <div className={`p-8 ${bgColor} ${borderColor} border-2 rounded-lg shadow-lg`}>
      <h1 className={`text-2xl font-bold mb-4 ${textColor}`}>Calculator</h1>
      <div className="mb-4">
        <input
          className="border border-gray-300 p-2 mb-2 rounded w-full"
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <input
          className="border border-gray-300 p-2 mb-4 rounded w-full"
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button className={`p-2 rounded ${buttonColor} text-white`} onClick={handleAddition}>+</button>
        <button className={`p-2 rounded ${buttonColor} text-white`} onClick={handleSubtraction}>-</button>
        <button className={`p-2 rounded ${buttonColor} text-white`} onClick={handleMultiplication}>*</button>
        <button className={`p-2 rounded ${buttonColor} text-white`} onClick={handleDivision}>/</button>
      </div>
      <h2 className={`mt-4 text-2xl font-bold ${resultColor}`}>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
