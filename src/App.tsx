import './App.css';

import { Component, ReactNode } from 'react';
import MainPage from './pages/MainPage';
import { DataType } from './types/data';
import {
  Header,
  Pagination,
  ErrorBoundary,
  PreviousSearchTerm,
} from './companents';
import { fetchData } from './companents/services/fetchData';

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

class App extends Component {
  state = initialValue;

  handleState(newState: DataType) {
    this.setState((prevState) => {
      return {
        ...prevState,
        ...newState,
      };
    });
  }

  componentDidMount(): void {
    this.getData(0, this.state.searchTerm);
  }

  getData = async (pageNumber: number = 0, searchTerm: string = '') => {
    this.handleState({
      loading: true,
    });
    await fetchData(pageNumber, searchTerm)
      .then((data) => {
        this.handleState({
          data: data,
          loading: false,
          error: false,
          total: data.page.totalElements,
          totalPages: data.page.totalPages,
          searchTerm: searchTerm,
        });
        localStorage.setItem(PreviousSearchTerm, searchTerm);
      })
      .catch(() => {
        this.handleState({
          loading: false,
          error: true,
        });
      });
  };

  render(): ReactNode {
    return (
      <ErrorBoundary>
        <Header getData={this.getData} />
        <main className="main-content">
          <MainPage value={this.state} />
        </main>
        <Pagination
          getData={this.getData}
          totalPages={this.state.totalPages || 0}
          searchTerm={this.state.searchTerm || ''}
        />
      </ErrorBoundary>
    );
  }
}

export default App;
