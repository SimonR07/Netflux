import React from 'react';

const styles = {
  button: {
    border: '2px solid black',
    borderRadius: '50px',
    padding: '1rem',
    width: '15%',
    margin: '0 auto',
  },
  text: {
    fontSize: '.9rem',
    color: '#000000',
  },
};


const LoadButton = () => {
  const classes = styles;
  return (
    <div style={classes.button}>
      <h2 style={classes.text}>
        EN VOIR PLUS
      </h2>
    </div>
  );
};

export default LoadButton;
