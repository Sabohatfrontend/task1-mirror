import './Cards.css';
import { BooksType } from '../../types/data';
import CardItem from './CardItem';

const Cards = (props: BooksType) => {
  const booksLists = props.books.map((book) => {
    return <CardItem book={book} key={book.uid} />;
  });
  return <ul className="cards-lists">{booksLists}</ul>;
};

export default Cards;
