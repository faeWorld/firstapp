  // src/context/AuthContext.js

  import React, { createContext, useState } from 'react';

  const AuthContext = createContext();

  const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);

      const login = async (username, password) => {
          try {
              const response = await axios.post('/api/users/login', { username, password });
              setUser(response.data);
          } catch (error) {
              console.error('Login error:', error);
          }
      };

      const logout = () => {
          setUser(null);
      };

      return (
          <AuthContext.Provider value={{ user, login, logout }}>
              {children}
          </AuthContext.Provider>
      );
  };

  export { AuthContext, AuthProvider };