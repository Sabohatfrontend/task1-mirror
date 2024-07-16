import { useCallback, useEffect } from 'react';
import { Cards, Pagination } from '../../companents';
import { useDataContext } from '../../hooks/useDataContext';
import './MainPage.css';
import { fetchData } from '../../services/fetchData';
import { ACTIONS } from '../../reducer/actions';
import { useSearchParams } from 'react-router-dom';
import { useSetLS } from '../../hooks/useSetLS';

const MainPage = () => {
  let total = 0;
  const { loading, error, data, page, dispatch } = useDataContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useSetLS();

  if (data) {
    total = data.page.totalElements;
  }

  const searchTerm = searchParams.get('search') || search || '';
  setSearch(searchTerm);

  const pageNumber = searchParams.get('page');
  let currentPage = page || 0;

  if (pageNumber) {
    currentPage = Number(pageNumber) - 1;
    if (currentPage !== page) {
      dispatch({
        type: ACTIONS.CURRENT_PAGE,
        payload: currentPage,
      });
    }
  }

  if (search !== searchTerm || searchParams.size !== 2) {
    setSearchParams({
      search: searchTerm,
      page: (currentPage + 1).toString(),
    });
  }

  const getData = useCallback(async () => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    await fetchData(currentPage, searchTerm)
      .then((data) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: data,
        });
      })
      .catch(() => {
        dispatch({ type: ACTIONS.ERROR });
      });
  }, [dispatch, currentPage, searchTerm]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong!!!</div>;

  if (!data || data.books.length === 0) return <div>Nothing found!!!</div>;

  return (
    <>
      <p>Total: {total}</p>
      <Cards books={data.books} />
      <Pagination />
    </>
  );
};

export default MainPage;
