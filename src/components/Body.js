import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';
import user from './database/userdata';

function Body()
{
    return(
        <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>
        <Sidebar name={user[0].name} alias={user[0].alias} image={user[0].image}/>
      </div>
    );
}

export default Body;