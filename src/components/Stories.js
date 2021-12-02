import React from 'react';
import Story from './Story';

const Stories = ( {stories} ) => {
    return stories.length ?(
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
    ):
    (
      <div class="stories-empty">
        <p>Não foram encontrados Stories!</p>
      </div>
    );
  }
  
  export default Stories;