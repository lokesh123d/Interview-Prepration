import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "lokesh",
    passion: "web developer",
  });

  return <UserContext.Provider value={[user,setUser]}>{children}</UserContext.Provider>;
};

export default UserProvider;
