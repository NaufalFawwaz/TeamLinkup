import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Repository } from "../repository/repository";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const repository = new Repository();
    const [userData, setUserData] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserData(user);
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <AppContext.Provider value={{ repository, userData }}>
            {children}
        </AppContext.Provider>
    );
};
