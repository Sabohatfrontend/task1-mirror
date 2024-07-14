import { Component, ReactNode } from 'react';
import logo from '../../assets/search.svg';
import './Header.css';
import SearchForm from './SearchForm';
import { HandleStateType } from '../../types/data';
import ErrorButton from '../errors/ErrorButton';

class Header extends Component<HandleStateType> {
  constructor(props: HandleStateType) {
    super(props);
  }

  render(): ReactNode {
    return (
      <header className="header">
        <img src={logo} alt="Logo" />
        <SearchForm handleState={this.props.handleState} />
        <ErrorButton />
      </header>
    );
  }
}

export default Header;
