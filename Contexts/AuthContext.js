import {createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState("")
   const [username, setUsername] = useState("")

   
    const login = (accessToken, username) => {
        setAccessToken(accessToken)
        setUsername(username)
    };

    const logout = () => {
        setAccessToken("");
        setUsername("")
    };

    return(
        <AuthContext.Provider value={{accessToken, username,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}