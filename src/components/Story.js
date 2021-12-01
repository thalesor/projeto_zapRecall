import React from 'react';

const Story = ({ user, image }) => {
  return (
    <div class="story">
        <div class="imagem">
            <img src={image} />
        </div>
        <div class="usuario">
             {user}
        </div>
    </div>
  );
}

export default Story;
