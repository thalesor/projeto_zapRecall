import React from 'react';
import Post from './Post';
import posts from './database/posts';

const Posts = () => {
    return (
      <div className="posts">
        {
          posts.map((post, i) =>
            <Post
              key={i}
              user={post.user}
              text={post.text}
              />
          )
        }
      </div>
    );
  }
  
  export default Posts;