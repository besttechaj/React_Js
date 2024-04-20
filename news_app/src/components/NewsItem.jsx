import React, { Component } from 'react';
import './NewsItem.css';
export default class NewsItem extends Component {
  render() {
    console.log('rendering NewsItem component');

    const { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='newsItem_outer'>
        <div className='card_img'>
          <img src={imageUrl} alt='pic' />
        </div>
        <div className='card_body'>
          <h6 className='card-title'>{title}...</h6>
          <p className='card-text'>{description}...</p>
          <button>
            <a href={newsUrl} target='_blank'>
              Read more
            </a>
          </button>
        </div>
      </div>
    );
  }
}
