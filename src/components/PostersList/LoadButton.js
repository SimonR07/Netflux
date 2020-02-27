import React from 'react';
import { func, bool } from 'prop-types';
import Spinner from './Spinner';

import { Button, TitleButton } from './styles';

const LoadButton = ({ loading, onClick }) => (
  <>
    {loading ? (
      <Spinner />
    ) : (
        <Button onClick={onClick}>
          <TitleButton>see more</TitleButton>
        </Button>
      )}
  </>
);


export default LoadButton;

LoadButton.defaultProps = {
  loading: bool,
  onClick: func,
};

LoadButton.propTypes = {
  loading: bool,
  onClick: func,
};
