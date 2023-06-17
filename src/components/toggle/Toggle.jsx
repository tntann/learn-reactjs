import React, { useState } from "react";
import "./ToggleStyle.css";

// stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }

// statefull functional component: component có sử dụng state
// function Toggle2() {
//   const [count, setCount] = useStates();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  // 1. enbling state: use state(initialize value)
  // 2. initialize value: useState(false), boolean(true, false), string(""), number(1,2,3), undefined, null, {title: """}, [1,2,3,4]
  // 3. reading state:
  // 4. update state
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
