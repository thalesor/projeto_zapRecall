import React from 'react';

const Story = ({ user, image }) => {
  return (
    <div className="story">
        <div className="imagem">
            <img src={image} />
        </div>
        <div className="usuario">
             {user}
        </div>
    </div>
  );
}

export default Story;
