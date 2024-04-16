import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  // calling the constructor to set the state
  constructor() {
    super();
    console.log('constructor: news Component');

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  //! Component did mount runs after render() completion.
  //* constructor run < render run < componentDidMount
  async componentDidMount() {
    console.log('running componentDidMount');
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f32ace7c69f44e48c5ffa0aa2529b62&page=${this.page}&pageSize=15`;

    let result = await fetch(url);
    console.log(result);
    let parsedData = await result.json();
    console.log(parsedData);
    console.log(parsedData.articles);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  //! handle previous button
  handlePreviousClick = async () => {
    console.log('previous click');
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f32ace7c69f44e48c5ffa0aa2529b62&page=${
      this.state.page - 1
    }&pageSize=15`;
    let result = await fetch(url);
    let parsedData = await result.json();
    console.log(parsedData);
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };

  //! handle next button
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) {
      console.log('do nothing');
      // do nothing
    } else {
      console.log('next click');
      console.log('page is: ', this.state.page);
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f32ace7c69f44e48c5ffa0aa2529b62&page=${
        this.state.page + 1
      }&pageSize=15`;
      let result = await fetch(url);
      let parsedData = await result.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
      console.log('current page: ', this.state.page);
      console.log('page status: ', Math.ceil(this.state.totalResults / 15));
    }
  };

  render() {
    console.log('rendering News component');

    return (
      <div className='container my-3'>
        <h1>Top - Headlines</h1>
        <div className='row'>
          {this.state.articles.map((ele) => {
            return (
              <div className='col-md-4' key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title.slice(0, 40) : 'unknown author'}
                  description={
                    ele.description
                      ? ele.description.slice(0, 60)
                      : 'no description'
                  }
                  imageUrl={
                    ele.urlToImage
                      ? ele.urlToImage
                      : 'https://t3.ftcdn.net/jpg/07/33/52/42/240_F_733524215_oWMzMDWYTFKowRLygU2orJXLqFdLFIoq.jpg'
                  }
                  newsUrl={ele.url}
                />
              </div>
            );
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button
            type='button'
            className='btn btn-dark'
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
          >
            Previous
          </button>
          <button
            type='button'
            className='btn btn-dark'
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
