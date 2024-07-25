import { useState, useEffect } from 'react';
import { Container, PostCard } from '../component/index.js';
import appwriteService from '../appwriteServices/databaseService.js';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      appwriteService.getPosts([]).then(
        (posts) => {
          if (posts) {
            setPosts(posts.documents);
          }
        },
        (err) => console.log(`unable to get posts due to`, err)
      );
    } catch (error) {
      console.log('Unable to get all the post due to ', error);
    }
  }, []);

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            // due to appWrite, we are using $id instead of id
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
