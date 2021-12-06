import React from 'react';
import Suggestion from './Suggestion';
import suggestions_data from './database/suggestions';

const Suggestions = () => {
    return (
        <div className="sugestoes">
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        {
          suggestions_data.map((suggestion, i) => 
            <Suggestion
              key={i}
              user={suggestion.user}
              razao={suggestion.razao}
              />
            )
        }
      </div>
    );
  }
  
  export default Suggestions;