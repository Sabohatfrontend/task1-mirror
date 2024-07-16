import { createContext, useReducer } from 'react';
import { paginatorReducer } from '../reducer/paginatorReducer';
import { DataContextType, DataType } from '../types/data';

const initialValue: DataType = {
  data: null,
  loading: false,
  error: false,
  page: 0,
};

export const DataContext = createContext<DataContextType | null>(null);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(paginatorReducer, initialValue);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
