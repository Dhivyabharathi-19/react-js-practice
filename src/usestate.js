import React, { useState } from "react";

function Hook() {
  let [num, setnum] = useState(2);

  const Add = () => {
    // setnum(4);
    setnum((currentvalue) => {
      return currentvalue + 1;
    });
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Add}>Add</button>
    </div>
  );
}
export default Hook;
