import { useState } from 'react';
import { useDataContext } from '../../hooks/useDataContext';
import { ACTIONS } from '../../reducer/actions';


const SearchForm = () => {
  const { searchTerm, dispatch } = useDataContext();
  const [value, setValue] = useState(searchTerm);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch({ type: ACTIONS.SEARCH_TERM, payload: value });
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
}


export default SearchForm;
