import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoadDiv } from './Loader.styled';

const Loader = () => {
  return (
    <LoadDiv>
      <Circles
        height="80"
        width="80"
        color="#000000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadDiv>
  );
};

export default Loader;
