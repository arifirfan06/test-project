// import React, { useState } from 'react';

// const AuthContext = React.createContext({
//   token: '',
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
// });

// export const AuthContextProvider = (props) => {
//   const initState = localStorage.getItem('auth')
//   const [token, setToken] = useState(initState);

//   const userIsLoggedIn = !!token;

//   const loginHandler = (token) => {
//     setToken(token);
//     localStorage.setItem('auth',token)
//   };

//   const logoutHandler = () => {
//     setToken(null);
//     localStorage.removeItem('auth')
//   };

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

import React, { createContext, useState } from 'react'

export const AuthContext = createContext({});

const Auth = ({children}) => {
  
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
        {children}
    </AuthContext.Provider>
  )
}

export default Auth