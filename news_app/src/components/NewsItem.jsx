import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    console.log('rendering NewsItem component');

    const { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className='card'>
          <img src={imageUrl} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h6 className='card-title'>{title}...</h6>
            <p className='card-text'>{description}...</p>
            <a
              href={newsUrl}
              target='_blank'
              className='btn btn-sm btn-primary'
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
