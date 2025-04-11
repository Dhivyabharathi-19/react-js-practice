import "./App.css";

import Hook from "./usestate";
import User from "./user.js";
import Effect from "./useEffect.js";
import Condition from "./conditional.js";
import UseReduce from "./usereduce.js";

function App() {
  const userData = {
    name: "dhivya",
    age: 26,
    phone: "12334345555",
    email: "dhivya@gmail.com",
  };
  const newuser = { ...userData, gender: "female", age: 25 };

  return (
    <div>
      <h2>Spread operator</h2>
      <User {...newuser} />
      <h2>useState </h2>
      <Hook />
      <h2> useEffect</h2>
      <Effect />
      <h2>Using Condition</h2>
      <Condition />
      <h2>UseReduce</h2>
      <UseReduce />
    </div>
  );
}

export default App;
