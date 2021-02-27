import React from 'react';
import AppTitle from './app-title';

const Explanation = ({explanation}) => {
    return (
      <div className='col-md-8 mx-auto'>
        <p className="explanation rounded text-white text-center mt-2  p-2"><span className="d-block my-2 lead  text-center">Explanation:</span>{explanation}</p>
      </div>
    );
  }

  export default Explanation;