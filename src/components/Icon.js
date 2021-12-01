import React from 'react';

const Icon = ({ name }) => {
  console.log(name);
  return (
    <ion-icon name={name}></ion-icon>
  );
}

export default Icon;
