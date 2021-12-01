import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

function Body()
{
    return(
        <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
    );
}

export default Body;