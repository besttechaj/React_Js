import React from 'react';

export default function Card() {
  return (
    <div
      className='card'
      style={{
        border: '2px solid red',
        height: '20rem',
        width: '30%',
        margin: 'auto',
        borderRadius: '10px',
      }}
    >
      <div style={{ height: '15rem', width: '100%' }}>
        <img
          src='https://images.pexels.com/photos/18959229/pexels-photo-18959229/free-photo-of-silhouette-of-warship-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='Card image cap'
          style={{
            height: '100%',
            width: '100%',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
}
