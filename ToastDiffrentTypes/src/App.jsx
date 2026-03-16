import React, { useContext, useEffect } from "react";
import GridItems from "./component/GridItems";
import InfiniteScroll from "./component/InfiniteScroll";
import { UserContext } from "./context/UserContext";



const App = () => {
  const [user,setUser] = useContext(UserContext);
  useEffect(()=>{
    setUser({
      name:"chageUser",
      passion:"i dont know"
    })

  },[])
  console.log(user);
  return (
    // < div className="min-h-screen bg-slate-950 text-slate-100 p-6 flex items-center justify-center">
    // <GridItems/>
    // </div>
  <div>
    <InfiniteScroll/>
  </div>
  );
};

export default App;