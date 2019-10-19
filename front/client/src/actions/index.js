import backend from "../apis/backend";

export const fetchArticles = subject => async dispatch => {
  let article = "articles/";

  if (subject) {
    article += `?subject__name=${subject}`;
  }

  const response = await backend.get(article);

  console.log(response);

  dispatch({ type: "FETCH_ARTICLES", payload: response.data.results });
};
