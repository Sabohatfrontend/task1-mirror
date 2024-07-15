type BookType = {
  uid: string;
  title: string;
  publishedYear: number;
  publishedMonth: number;
  publishedDay: number;
  numberOfPages: number;
  stardateFrom?: number;
  stardateTo?: number;
  yearFrom?: number;
  yearTo?: number;
  novel?: true;
  referenceBook?: true;
  biographyBook?: true;
  rolePlayingBook?: true;
  ebook?: true;
  anthology?: true;
  novelization?: true;
  unauthorizedPublication?: true;
  audiobook?: true;
  audiobookAbridged?: true;
  audiobookPublishedYear?: number;
  audiobookPublishedMonth?: number;
  audiobookPublishedDay?: number;
  audiobookRunTime?: number;
  productionNumber?: string;
  bookSeries?: [[]];
  authors?: [[]];
  artists?: [[]];
  editors?: [[]];
  audiobookNarrators?: [[]];
  publishers?: [[]];
  audiobookPublishers?: [[]];
  characters?: [[]];
  references?: [[]];
  audiobookReferences?: [[]];
  bookCollections?: [[]];
};

type PageType = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
}

export type BooksType = {
  books: BookType[];
};

export interface DataReducerType extends BooksType {
  page: PageType;
}

export type PropsBook = {
  book: BookType;
};

export type DataType = {
  data: DataReducerType | null | undefined;
  loading: boolean;
  error: boolean;
  page: number;
  searchTerm: string;
};

export interface ActionType {
  type: string;
  payload?: DataReducerType | string;
}

export interface DataContextType extends DataType {
  dispatch: React.Dispatch<ActionType>

}
