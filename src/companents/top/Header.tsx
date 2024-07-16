import logo from '../../assets/search.svg';
import './Header.css';
import SearchForm from './SearchForm';
import ErrorButton from '../errors/ErrorButton';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <SearchForm />
      <ErrorButton />
    </header>
  );
};

export default Header;
