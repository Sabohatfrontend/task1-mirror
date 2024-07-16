import './Pagination.css';
import { useDataContext } from '../../hooks/useDataContext';
import { ACTIONS } from '../../reducer/actions';
import { useSearchParams } from 'react-router-dom';
import { useSetLS } from '../../hooks/useSetLS';

const Pagination = () => {
  let totalPages = 0;
  const { data, dispatch, page } = useDataContext();
  const [, setSearchParams] = useSearchParams();
  const [searchTerm] = useSetLS();

  if (data) {
    totalPages = data.page.totalPages;
  }

  const handlePrevPage = () => {
    dispatch({
      type: ACTIONS.PREV_PAGE,
    });
    setSearchParams({
      search: searchTerm,
      page: (page).toString()
    });
  };

  const handleNextPage = () => {
    dispatch({
      type: ACTIONS.NEXT_PAGE,
    });
    setSearchParams({
      search: searchTerm,
      page: (page + 2).toString()
    });
  };

  console.log('1. Pagination');
  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={page - 1 < 0}>
        Prev
      </button>
      <p>
        {page + 1}/{totalPages}
      </p>
      <button onClick={handleNextPage} disabled={page + 1 >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
