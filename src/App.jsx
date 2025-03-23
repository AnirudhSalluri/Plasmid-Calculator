import React, { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, setValue } = useForm();
  const [fill, setFill] = useState("");

  const fillform = (i) => {
    setFill((prev) => {
      const newValue = prev + i;
      setValue("calc", newValue);
      return newValue;
    });
  };

  const clearForm = () => {
    setFill("");
    setValue("calc", "");
  };

  const calculateResult = () => {
    try {
      const result = eval(fill); 
      setFill(result.toString());
      setValue("calc", result.toString());
    } catch (error) {
      setFill("Error");
      setValue("calc", "Error");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-5">
      <div className="bg-red-500 px-6 py-3 text-3xl font-bold rounded-md shadow-md">
        Calculator
      </div>
      <form className="mt-5 w-72 bg-gray-800 p-5 rounded-lg shadow-lg">
        <input
          className="w-full mb-4 text-right text-2xl bg-gray-700 p-3 rounded-md border-none outline-none"
          type="text"
          {...register("calc")}
          readOnly
        />
         {/* Clear Button */}
         <button
            type="button"
            className="col-span-2   bg-red-600 p-4 px-5 text-xl rounded-md hover:bg-red-500 transition"
            onClick={clearForm}
          >
            C
          </button>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {/* Numbers */}
          {[7, 8, 9, "/",
            4, 5, 6, "*",
            1, 2, 3, "-",
            0, ".",  "+"
          ].map((item, index) => (
            <button
              key={index}
              type="button"
              className="bg-gray-600 p-4 text-xl rounded-md hover:bg-gray-500 transition"
              onClick={() => fillform(item)}
            >
              {item}
            </button>))}
             <button
             type="button"
             className="bg-gray-600 p-4 text-xl rounded-md hover:bg-gray-500 transition"
             onClick={() => calculateResult()}
           >
             =
           </button>
          
         
        </div>
      </form>
    </div>
  );
};

export default App;
