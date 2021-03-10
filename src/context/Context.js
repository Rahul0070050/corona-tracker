import { createContext, useContext, useState } from "react";
import { API } from "../components/ALL_DATA/ALL_DATA";
import useFetch from '../components/useFetch/useFetch';



const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [loading, data] = useFetch(API);


    const value = {
        loading,
        data
    }

    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider >
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }