import { Component, ReactNode } from 'react';
import logo from '../../assets/search.svg';
import './Header.css';
import SearchForm from './SearchForm';
import { GetDataType } from '../../types/data';
import ErrorButton from '../errors/ErrorButton';

class Header extends Component<GetDataType> {
  constructor(props: GetDataType) {
    super(props);
  }

  render(): ReactNode {
    return (
      <header className="header">
        <img src={logo} alt="Logo" />
        <SearchForm getData={this.props.getData} />
        <ErrorButton />
      </header>
    );
  }
}

export default Header;
