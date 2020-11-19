import fetch from "node-fetch";
// 나의 서버와 다른 API연결
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

// REST API를 GraphQL로 감쌋다?
export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(`${REQUEST_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
