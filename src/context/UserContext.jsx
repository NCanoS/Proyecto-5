import React, {createContext, useState} from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [tokenContext, setTokenContext] = useState('');

    const saveUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        return setUser(JSON.parse(localStorage.getItem("user")));
    }

    const deleteUser = () => {
        localStorage.removeItem("user");
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
            deleteUser
        }}>
           {
            children
           } 
        </UserContext.Provider>
    )
}