import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

function Body( {stories} )
{
    return(
        <div className="corpo">
        <div className="esquerda">
          <Stories stories={stories}/>
          <Posts />
        </div>
        <Sidebar />
      </div>
    );
}

export default Body;