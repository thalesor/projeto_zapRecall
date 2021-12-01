import React from 'react';
import Story from './Story';
import stories from './database/stories';

const Stories = () => {
    return (
      <div class="stories">
        {
          stories.map((story, i) => {
            return (
              <Story
                user={story.user}
                image={story.image}
                />
            );
          })
          
        }
        <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
  }
  
  export default Stories;