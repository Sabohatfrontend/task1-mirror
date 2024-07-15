import './Pagination.css';
import { useDataContext } from '../../hooks/useDataContext';
import { ACTIONS } from '../../reducer/actions';

const Pagination = () => {
  let totalPages = 0;
  const { data, dispatch, page } = useDataContext();
  if (data) {
    totalPages = data.page.totalPages;
  }

  const handlePrevPage = () => {
    dispatch({
      type: ACTIONS.PREV_PAGE,
    });
  }

  const handleNextPage = () => {
    dispatch({
      type: ACTIONS.NEXT_PAGE,
    });
  }


  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={page - 1 < 0}>Prev</button>
      <p>
        {page + 1}/{totalPages}
      </p>
      <button onClick={handleNextPage} disabled={page + 1 >= totalPages}>Next</button>
    </div>
  );
}


export default Pagination;
