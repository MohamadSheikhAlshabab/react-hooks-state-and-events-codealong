import React , {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function toggleHandler(){
    setIsOn(isOn => isOn = ! isOn)
  }
  return <button onClick={toggleHandler}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
