import { useState } from 'react';
import { useSetLS } from '../../hooks/useSetLS';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchTerm, setSeachTerm] = useSetLS();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [value, setValue] = useState(search || searchTerm || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSeachTerm(value);
    setSearchParams({ search: value, page: '1' });
  };

  return (
    <form className="top-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
