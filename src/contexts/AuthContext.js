import { createContext, useCallback, useState } from 'react'
import React from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = useCallback(() => {
        setIsAuthenticated(prevAuth => !prevAuth);
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider