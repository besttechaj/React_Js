import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './sample.json';

export default class News extends Component {
  articles = [...data];

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
        <h1>This is a news component</h1>
        <div className='row'>
          <div className='col-md-4'>
            <NewsItem
              title='myTitle'
              description='explanation...'
              imageUrl='https://c.ndtvimg.com/2024-04/naqdpe5g_iran-drone-strikes-on-israel_625x300_14_April_24.jpeg?ver-20240316.08'
              newsUrl='todo'
            />
          </div>
          <div className='col-md-4'>
            <NewsItem
              title='myTitle'
              description='explanation...'
              imageUrl='https://c.ndtvimg.com/2024-04/naqdpe5g_iran-drone-strikes-on-israel_625x300_14_April_24.jpeg?ver-20240316.08'
              newsUrl='todo'
            />
          </div>
          <div className='col-md-4'>
            <NewsItem
              title='myTitle'
              description='explanation...'
              imageUrl='https://c.ndtvimg.com/2024-04/naqdpe5g_iran-drone-strikes-on-israel_625x300_14_April_24.jpeg?ver-20240316.08'
              newsUrl='todo'
            />
          </div>
        </div>
      </div>
    );
  }
}
