import './App.css';

import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage';
import { DataType } from './types/data';
import {
  Header,
  Pagination,
  ErrorBoundary,
  PreviousSearchTerm,
} from './companents';
import { fetchData } from './services/fetchData';

const searchTerm = localStorage.getItem(PreviousSearchTerm) || '';

const initialValue: DataType = {
  data: null,
  loading: false,
  error: false,
  total: 0,
  page: 0,
  totalPages: 0,
  searchTerm: searchTerm,
};

const App = () => {
  const [state, setState] = useState(initialValue);

  const handleState = (newState: DataType) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...newState,
      };
    });
  };

  useEffect(() => {
    const getData = async () => {
      handleState({
        loading: true,
      });
      if (state.page !== undefined && state.searchTerm !== undefined)
        await fetchData(state.page, state.searchTerm)
          .then((data) => {
            handleState({
              data: data,
              loading: false,
              error: false,
              total: data.page.totalElements,
              totalPages: data.page.totalPages,
              searchTerm: state.searchTerm,
            });
            localStorage.setItem(PreviousSearchTerm, searchTerm);
          })
          .catch(() => {
            handleState({
              loading: false,
              error: true,
            });
          });
    };

    getData();
  }, [state.page, state.searchTerm]);

  return (
    <ErrorBoundary>
      <Header handleState={handleState} />
      <main className="main-content">
        <MainPage value={state} />
      </main>
      <Pagination
        handleState={handleState}
        totalPages={state.totalPages || 0}
        searchTerm={state.searchTerm || ''}
      />
    </ErrorBoundary>
  );
};

export default App;
