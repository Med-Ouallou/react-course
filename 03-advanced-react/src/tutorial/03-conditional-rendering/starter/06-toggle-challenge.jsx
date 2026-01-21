import { useState } from "react";

const ToggleChallenge = () => {
  const [isTogel,setTogel] = useState(false);

  // const handelClick = ()=> {
  //     if(isTogel){
  //       setTogel(false);
  //       return;
  //     }
  //     setTogel(true);
  // }
  

  return (
    <div>
      {/*  */}
        <button className="btn" onClick={()=>{
          setTogel(!isTogel)
        }}>Togel Alert</button>
        {/* conditional rendring */}
        {isTogel && <Alert/>}
    </div>
  )
};

const Alert = ()=>{
  return(
    <div className="alert alert-danger">Hello World</div>
  )
}

export default ToggleChallenge;
