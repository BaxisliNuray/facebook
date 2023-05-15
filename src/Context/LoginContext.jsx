import React from 'react'
import { useState, useContext, createContext } from 'react'

const LoginContext = createContext()
const LoginContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const values = { user, setUser }

    return (
        <LoginContext.Provider value={values}>
            {children}
        </LoginContext.Provider>
    )
}

export const userLoginContext=()=>useContext(LoginContext)