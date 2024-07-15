import { PropsBook } from '../../types/data';

const CardItem = (props: PropsBook) => {
  const { title, numberOfPages, publishedYear } = props.book;
  const publishedDate = `${publishedYear}`;

  return (
    <li className="card-item">
      <h3 className="card-item-header">{title}</h3>
      <p>
        <span className="card-item-text">Page number:</span> {numberOfPages}
      </p>
      <p>
        <span className="card-item-text">Published Year:</span>{' '}
        {publishedDate}
      </p>
    </li>
  );
}


export default CardItem;
