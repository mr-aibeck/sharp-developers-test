import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { font } from '../_mixins';

const InputWrap = styled.label`
  background: #eeeeee;
  border: 1px solid #c0c0c0;
  box-shadow: 0 0 0 1px inset #d8d8d8;
  box-sizing: border-box;
  height: ${({ size }) => (size === 'small' ? '40' : '50')}px;
  ${({ size }) => (size === 'small' ? font.brandLarge : font.brandLargest)};
  padding: 0px 14px;
  position: relative;
`

const Input = styled.input`
  background: none;
  border: none;
  font: inherit;
  outline: none;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #a3a3a3;
  }
`

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%)
`

const InputComponent = ({ size = 'normal', iconType, ...props}) => {
  return (
    <InputWrap {...props} size={size}>
      <Input {...props} />
      {props.withIcon && <StyledIcon type={iconType} />}
    </InputWrap>
  );
}

export default InputComponent;
