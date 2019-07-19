import React from 'react';

import CharacterCard from './CharacterCard';
import 'semantic-ui-css/semantic.min.css';


const Characters = (props) => {
    // STEP 2 - add the imported data to state
    return (
      <div className='ui centered cards'>
        {[...Array(props.count).keys()].map(number => <CharacterCard key={number+1} id={number+1} />)}
      </div>
    );
  };

  export default Characters;

