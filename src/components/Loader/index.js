import React from 'react';
import { font } from '../_mixins';
import styled, { keyframes } from 'styled-components';

const Wrap = styled.div`
  color: #646464;
  ${font.brandLargest}
  text-align: center;
`;

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
`

const Spinner = styled.div`
  animation: ${rotate} 1.4s infinite linear;
  background: url('Spinner.png');
  margin-bottom: 12px;
  height: 56px;
  width: 59px;
`

const Loader = () => {
  return (
    <Wrap>
      <Spinner />
      Loading...
    </Wrap>
  );
};

export default Loader;
