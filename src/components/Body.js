import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

function Body( {stories} )
{
    return(
        <div class="corpo">
        <div class="esquerda">
          <Stories stories={stories}/>
          <Posts />
        </div>
        <Sidebar />
      </div>
    );
}

export default Body;