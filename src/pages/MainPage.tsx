import './MainPage.css';

import { Component, ReactNode } from 'react';
import { Cards } from '../companents';
import { PropsType } from '../types/data';

class MainPage extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): ReactNode {
    const { loading, error, data, total } = this.props.value;

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Something went wrong!!!</div>;

    if (!data || data.books.length === 0) return <div>Nothing found!!!</div>;

    return (
      <>
        <p>Total: {total}</p>
        <Cards books={data.books} />
      </>
    );
  }
}

export default MainPage;
