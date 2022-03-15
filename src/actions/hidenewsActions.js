const hideNews = (newsId) => {
  return {
    type: "HIDE_NEWS",
    payload: newsId,
  };
};
export default {
  hideNews,
};
