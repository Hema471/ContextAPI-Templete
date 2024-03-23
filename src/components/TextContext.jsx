import { useContext } from "react";
import { textContext } from "./../context/MyContext";

const TextContext = () => {
  const testName = useContext(textContext);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="font-bold text-[50px]">
        <p className="inline text-red-600">{testName.name} </p>From MyContext.jsx
      </h1>
    </div>
  );
};

export default TextContext;
