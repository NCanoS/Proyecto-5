import React, {createContext, useState} from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [tokenContext, setTokenContext] = useState('');

    const saveUser = (email,password) => {
        localStorage.setItem("user", JSON.stringify({email:email,password:password}));
        setIsAuth(true);
        return setUser(JSON.parse(localStorage.getItem("user")));
    }

    const getUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    }

    const deleteUser = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
        return setUser(null);
        
    }

    return(
        <UserContext.Provider
        value={{
            user,
            setUser,
            tokenContext,
            setTokenContext,
            saveUser,
            deleteUser,
            getUser,
            isAuth,
            setIsAuth
        }}>
           {
            children
           } 
        </UserContext.Provider>
    )
}