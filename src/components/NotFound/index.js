import React from 'react';

const styles = {
  title: {
    fontSize: '18rem',
  },
};
const NotFound = (props) => {
  const classes = styles;
  return (
    <div>
      <p style={classes.title}>NOT FOUND</p>
    </div>

  );
};

export default NotFound;
