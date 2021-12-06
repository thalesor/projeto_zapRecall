import React from 'react';
import Story from './Story';
import Icon from './Icon';

const Stories = ( {stories} ) => {

    return stories.length ?(
      <div className="stories">
        {
          stories.map((story, i) => 
            <Story
              key={i}
              user={story.user}
              image={story.image}
              />
          )
        }
        <div className="setinha">
              <Icon name="chevron-forward-circle" />
        </div>
      </div>
    ):
    (
      <div className="stories-empty">
        <p>Não foram encontrados Stories!</p>
      </div>
    );
  }
  
  export default Stories;