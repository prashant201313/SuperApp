import React from 'react';
import loading from './loading.gif';

const Spinner = () => {
  return (
    <div>
      <img style={{margin: '5px auto'}} src={loading} alt="loading" width={100} />
    </div>
  );
}

export default Spinner;