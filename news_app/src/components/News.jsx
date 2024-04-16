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
    };
  }

  //! Component did mount runs after render() completion.
  //* constructor run < render run < componentDidMount
  async componentDidMount() {
    console.log('running componentDidMount');
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f32ace7c69f44e48c5ffa0aa2529b62`;

    let result = await fetch(url);
    console.log(result);
    let parsedData = await result.json();
    console.log(parsedData.articles);
    this.setState(parsedData);
  }
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
                      : 'https://t3.ftcdn.net/jpg/07/33/52/42/240_F_733524219_oWMzMDWYTFKowRLygU2orJXLqFdLFIoq.jpg'
                  }
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
