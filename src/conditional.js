import React, { useState } from "react";

function Conditon() {
  let [update, setupdate] = useState(0);

  const toggle = () => {
    setupdate((currentvalue) => currentvalue + 1);
  };

  return (
    <div>
      <h1>{update}</h1>
      <button onClick={toggle}>{update >= 1 ? "True" : "False"}</button>
      <h1>{!update ? "True" : "False"}</h1>
    </div>
  );
}

export default Conditon;
