import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div class="pesquisa">
            <input type="text" placeholder="Pesquisar nos stories" onChange={searchChange}/>
    </div>
  );
}

export default SearchBox;