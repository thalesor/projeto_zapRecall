import React from 'react';
import Post from './Post';
import posts from './database/posts';

const Posts = () => {
    return (
      <div class="posts">
        {
          posts.map((post, i) => {
            return (
              <Post
                user={post.user}
                text={post.text}
                />
            );
          })
          
        }
      </div>
    );
  }
  
  export default Posts;