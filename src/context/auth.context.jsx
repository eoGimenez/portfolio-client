import { createContext, useEffect, useState } from 'react';
import AuthService from '../services/auth.service';

const AuthContext = createContext();

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authService = new AuthService();

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const deleteToken = () => {
    localStorage.removeItem('authToken');
  };

  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  const isAuthenticated = () => {
    setIsLoading(true);

    const token = getToken();
    if (token) {
      authService
        .verify()
        .then((response) => {
          setIsLoggedIn(true);
          setUser(response.data);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
          setUser(null);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        });
    } else {
      setIsLoggedIn(false);
      setUser(null);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        storeToken,
        isAuthenticated,
        deleteToken,
        isLoading,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
