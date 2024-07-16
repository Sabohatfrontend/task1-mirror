const ENDPOINT = 'https://stapi.co/api/v1/rest/book/search';
const PAGE_SIZE = 20;

const getURL = (pageNumber: number) => {
  return `${ENDPOINT}?pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
};

export const fetchData = async (pageNumber: number, searchTerm: string) => {
  const response = await fetch(getURL(pageNumber), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ title: searchTerm }),
  });

  return response.json();
};

export const getDetail = async (id: string) => {
  const response = await fetch(`https://stapi.co/api/v1/rest/book?uid=${id}`);
  return response.json();
};
