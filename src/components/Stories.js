import React from 'react';
import Story from './Story';
import Icon from './Icon';

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
              <Icon name="chevron-forward-circle" />
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