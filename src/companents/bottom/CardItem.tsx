import { Link } from 'react-router-dom';
import { PropsBook } from '../../types/data';

const CardItem = (props: PropsBook) => {
  const { title, numberOfPages, publishedYear, uid } = props.book;
  const publishedDate = `${publishedYear}`;

  return (
    <li className="card-item">
      <Link className="card-link" to={`/${uid}`}>
        <h3 className="card-item-header">{title}</h3>
        <p>
          <span className="card-item-text">Page number:</span> {numberOfPages}
        </p>
        <p>
          <span className="card-item-text">Published Year:</span>{' '}
          {publishedDate}
        </p>
      </Link>
    </li>
  );
};

export default CardItem;
