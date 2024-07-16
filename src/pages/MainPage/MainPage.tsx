import { useEffect } from 'react';
import { Cards, Pagination } from '../../companents';
import { useDataContext } from '../../hooks/useDataContext';
import './MainPage.css';
import { fetchData } from '../../services/fetchData';
import { ACTIONS } from '../../reducer/actions';

const MainPage = () => {
  let total = 0;
  const { loading, error, data, page, searchTerm, dispatch } = useDataContext();

  if (data) {
    total = data.page.totalElements;
  }

  useEffect(() => {
    const getData = async () => {
      if (page !== undefined && searchTerm != undefined) {
        dispatch({ type: ACTIONS.MAKE_REQUEST });
        await fetchData(page, searchTerm)
          .then((data) => {
            dispatch({
              type: ACTIONS.GET_DATA,
              payload: data,
            });
          })
          .catch(() => {
            dispatch({ type: ACTIONS.ERROR });
          });
      }
    };
    getData();
  }, [dispatch, page, searchTerm]);

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
