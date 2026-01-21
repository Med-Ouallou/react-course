import { useState } from "react";

const UserChallenge = () => {
  const [user,  setUser] = useState(null);

  const login = () => {
    setUser({name:'mohamed'});
  }

  const logout = () => {
    setUser(null);
  }

  
  return (
    <div>
      {/* in this way : { user ? <div> : <div> } */}
      {/* in this way : { user ? <logout> : <login> } */}
      {user ? 
        (
          <div>
            <h2>Hello there {user.name}</h2>
            <button className="btn" onClick={logout}>logout</button>
          </div>
        ) :
        (
          <div>
            <h2>Please login</h2>
            <button className="btn" onClick={login}>login</button>
          </div>
        )
      }
    </div>
  )
};

export default UserChallenge;
