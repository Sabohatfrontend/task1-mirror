import { Component, ReactNode } from 'react';
import { PreviousSearchTerm } from '../constants';
import { GetDataType } from '../../types/data';

class SearchForm extends Component<GetDataType> {
  constructor(props: GetDataType) {
    super(props);
  }

  state = {
    value: this.getPreviousSearchTerm(),
  };

  getPreviousSearchTerm(): string {
    return localStorage.getItem(PreviousSearchTerm) || '';
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { getData } = this.props;
    getData(0, this.state.value);
  };

  render(): ReactNode {
    return (
      <form className="top-form" onSubmit={this.handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
