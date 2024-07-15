import { createContext, useReducer } from "react";
import { paginatorReducer, PreviousSearchTerm } from "../reducer/paginatorReducer";
import { DataContextType, DataType } from "../types/data";

function getPreviousSearchTerm(): string {
    return localStorage.getItem(PreviousSearchTerm) || '';
}

const initialValue: DataType = {
    data: null,
    loading: false,
    error: false,
    page: 0,
    searchTerm: getPreviousSearchTerm(),
};

export const DataContext = createContext<DataContextType | null>(null);

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(paginatorReducer, initialValue);

    return (
        <DataContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}