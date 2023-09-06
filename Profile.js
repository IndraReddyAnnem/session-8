import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const timer = setInterval(() => {
      console.log("Hello world!")
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect returned");
    };
  },[]);
 
  console.log("rendered");
  
    return (
      <div>
        <h2>Profile Component</h2>
        <h3>Name: {props.name}</h3>
        <h3>count: {count}</h3>
         <button onClick={()=> { 
         setCount(1);
        }}>Click</button>
      </div>
    );
  };
  
  export default Profile; 