export const PreviousSearchTerm = 'prev-search-term';

export const useSetLS: () => [string, (term: string) => void] = () => {
  return [
    localStorage.getItem(PreviousSearchTerm) || '',
    (term: string) => {
      localStorage.setItem(PreviousSearchTerm, term);
    },
  ];
};
