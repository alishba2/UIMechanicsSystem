import React, { createContext, useState, useEffect } from "react";
import { getUserById } from "../../Api/api"; // Adjust the import path as needed

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("userId")
    if (user) {
      setIsLoggedIn(true);
    }
    setId(user);


  }, [localStorage])



  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("role", userData.role);
    localStorage.setItem("userId", userData?.id);
    console.log("data-----", userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await getUserById(id);
          console.log(response, "reponse of logged ind ata");
          setUser(response.data.user); // Adjust to match the response format
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUser();
  }, [localStorage, id]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
