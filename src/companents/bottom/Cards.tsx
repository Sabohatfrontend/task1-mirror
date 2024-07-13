import { Component, ReactNode } from 'react';
import './Cards.css';
import { BooksType } from '../../types/data';
import CardItem from './CardItem';

class Cards extends Component<BooksType> {
  constructor(props: BooksType) {
    super(props);
  }
  render(): ReactNode {
    const booksLists = this.props.books.map((book) => {
      return <CardItem book={book} key={book.uid} />;
    });
    return <ul className="cards-lists">{booksLists}</ul>;
  }
}

export default Cards;
