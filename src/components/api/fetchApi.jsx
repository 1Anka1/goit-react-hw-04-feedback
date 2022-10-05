import axios from "axios";

export const fetchArticlesWithQuery = async searchQuery => {
   const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  return res.data.hits;
};

export default {fetchArticlesWithQuery};