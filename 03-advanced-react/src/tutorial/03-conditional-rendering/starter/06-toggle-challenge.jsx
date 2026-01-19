import { useState } from "react";

const ToggleChallenge = () => {
  const [isTogel,setTogel] = useState(false);

  const handelClick = ()=> {
      
  }
  

  return (
    <div>
        <button className="btn">Togel Alert</button>
        <Alert/>
    </div>
  )
};

const Alert = ()=>{
  return(
    <div className="alert alert-danger">Hello World</div>
  )
}

export default ToggleChallenge;
