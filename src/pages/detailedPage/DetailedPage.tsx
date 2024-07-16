import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetail } from '../../services/fetchData';
import { BookType } from '../../types/data';
import './Detailed.css';

export const DetailedPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDataDetail = async () => {
      await getDetail(id!)
        .then((res) => {
          setBook(res.book);
        })
        .catch((err) => {
          console.log('Fetching is failed', err);
        });
    };
    getDataDetail();
  }, [id]);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <section className="detailed">
      <h2>{book?.title}</h2>
      <p>Year: {book?.publishedYear}</p>
      <p>Page number: {book?.numberOfPages}</p>
      <button onClick={handleClose} className="button">
        Close
      </button>
    </section>
  );
};
