import React, { Component } from 'react';
import ContentLoader from 'react-content-loader';

import api from './api/fetchApi';
import ArticleList from './ArticleList';


export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const articles = await api.fetchArticlesWithQuery("react");
      console.log(articles);
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <ContentLoader/>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}