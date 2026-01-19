import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        // step 1
        const response = await fetch(url);
        // ok its http request code 
        if(!response.ok){
          setLoading(false);
          setError(true);
          return; // to stop the execution of code 
        }
        // step 2
        const user = await response.json();
        // console.log(user);
        setUser(user);
      } catch (error) {
        setError(true)
        console.log(error);
      }
      setLoading(false)
    }
    fetchData()
  }, []);

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>Ops! there is an Error...</h2>
  }

      const {avatar_url,name,company} = user;
  return (
    <div>
        <img
          style={{width:'150px',borderRadius:'25px'}}
          src={avatar_url} alt={avatar_url} />
        <h2>{name}</h2>
        <h3>Work at : {company}</h3>
    </div>
  )
};
export default MultipleReturnsFetchData;
