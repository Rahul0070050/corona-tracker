import { createContext, useContext, useState } from "react";
import { API } from "../components/ALL_DATA/ALL_DATA";
import useFetch from '../components/useFetch/useFetch';



const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [fetchData, setFetchData] = useState([])
    const [loading, data] = useFetch(API);
    if (!loading) {
        setFetchData(data);
    }


    const value = {
        loading,
        fetchData
    }

    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider >
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }