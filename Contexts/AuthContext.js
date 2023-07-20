import {createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState("")
    const login = (accessToken) => {
        setAccessToken(accessToken)
    
    };

    const logout = () => {
        setAccessToken("");
    
    };

    return(
        <AuthContext.Provider value={{accessToken,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}