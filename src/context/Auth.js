import React, { createContext, useState } from 'react'

export const AuthContext = createContext({});

const Auth = ({children}) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
        {children}
    </AuthContext.Provider>
  )
}

export default Auth