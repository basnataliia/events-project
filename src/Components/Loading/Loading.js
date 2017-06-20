import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingPage = () => {
  return (
    <div style={{background: '#EEEEEE', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0'}}>
      <div style={{textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <CircularProgress size={250} thickness={5} />
        <h3 style={{color: '#9E9E9E'}}>LOADING</h3>
      </div>
  </div>
  );
}

export default LoadingPage
