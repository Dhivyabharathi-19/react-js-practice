import React, { useState } from "react";
import { useEffect } from "react";

const Effect = () => {
  const [num1, setnum1] = useState(500);
  const [num2, setnum2] = useState(5000);

  useEffect(() => {
    // setnum1(100);
    console.log("Effect");

    return () => {
      //   setnum1(500);
      console.log("memory cleaned");
    };
  }, [num1, num2]);
  console.log("num", num1);

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => setnum1((curr) => curr + 1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={() => setnum2((curr) => curr + 1)}>Add</button>
    </div>
  );
};
export default Effect;
