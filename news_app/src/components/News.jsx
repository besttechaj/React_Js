import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './sample.json';

export default class News extends Component {
  articles = [...data.articles];

  // calling the constructor to set the state
  constructor() {
    super();
    console.log('constructor: news Component');

    this.state = {
      articles: this.articles,

      loading: false,
    };
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Top - Headlines</h1>
        <div className='row'>
          {this.state.articles.map((ele) => {
            return (
              <div className='col-md-4' key={ele.url}>
                <NewsItem
                  title={ele.title.slice(0, 40)}
                  description={ele.description.slice(0, 60)}
                  imageUrl={ele.urlToImage ? ele.urlToImage : 'no image'}
                  newsUrl={ele.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
