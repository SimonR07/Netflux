import React from 'react';
import Spinner from './Spinner';

const styles = {
  button: {
    border: '2px solid black',
    borderRadius: '50px',
    padding: '1rem',
    width: '10%',
    margin: '0 auto',
  },
  text: {
    fontSize: '.9rem',
    color: '#000000',
  },
};


const LoadButton = ({ loading, onClick }) => {
  const classes = styles;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={classes.button}
          onClick={onClick}
        >
          <h2 style={classes.text}>
          SEE MORE
          </h2>
        </div>
      )}
    </>
  );
};

export default LoadButton;
