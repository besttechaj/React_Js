import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwriteServices/databaseService';
const PostCard = ({ $id, title, featuredImage }) => {
  console.log('running post card comp**************');
  return (
    <Link to={`/post/${$id}`}>
      <div>
        <div>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
          />
        </div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
