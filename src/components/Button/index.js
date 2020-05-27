import React from 'react';
import styled from 'styled-components';
import noise from './noise.png';
import { font } from '../_mixins';

const ButtonComponent = styled.button`
  cursor: pointer;
  height: 38px;
  outline: none;

  ${props => props.type === 'default' && font.brandLargeBold};

  ${props => props.type === 'default' && `
     background: linear-gradient(#f4f4f4 0%, #e6e6e6 100%), url(${noise});
     border-radius: 8px;
     background-repeat: repeat;
	   box-shadow: inset 0px 1px 0px #f8f8f8, 0px 2px 0px 0px #d6d6d6, 0px 3px 5px #999;
     color: #646464;
     ${font.brandLarge};
     text-shadow: 1px 1px 2px white;
     height: 38px;
     padding: 0 42px;

     &:hover {
       background: linear-gradient(#e6e6e6 0%, #f4f4f4 100%), url(${noise});
       opacity: 0.8;
     }

     &:active {
       background: linear-gradient(#f4f4f4 0%, #e6e6e6 100%), url(${noise});
       border: 1px solid rgba(0,0,0,0);
   	   box-shadow: inset 0px 2px 5px rgba(0,0,0,0.35), 0px 2px 0px 0px #d6d6d6, 0px 3px 5px #999;
       opacity: 1;
     }
  `}

  ${props => props.type === 'simple' && font.brandMiddleBold};

  ${props => props.type === 'simple' && `
     background: linear-gradient(#5e5e5e 0%, #444444 100%);
     border-radius: 5px;
     border: 1px solid #4d4d4d;
	   box-shadow: inset 0px 1px 0px #878787, 0px 1px 3px rgba(0,0,0,0.35);
     color: #fff;
     height: 30px;
     padding: 0 22px;
     text-shadow: 0px 0px 1px black;

     &:hover {
       background: linear-gradient(#444444 0%, #5e5e5e 100%);
       opacity: 0.8;
     }

     &:active {
       background: linear-gradient(#5e5e5e 0%, #444444 100%);
       border: 1px solid rgba(0,0,0,0);
   	   box-shadow: inset 0px 2px 5px rgba(0,0,0,0.35), 0px 3px 5px #999;
       opacity: 1;
     }
  `}

  ${props => props.isDisabled && props.type === 'default' && `
    opacity: 0.25;

    &:hover {
      background: linear-gradient(#f4f4f4 0%, #e6e6e6 100%), url(${noise});
	    box-shadow: inset 0px 1px 0px #f8f8f8, 0px 2px 0px 0px #d6d6d6, 0px 3px 5px #999;
      cursor: default;
      opacity: 0.25;
    }

    &:active {
      background: inherit;
      opacity: 0.25;
    }
  `}
`


const Button = ({ type = "default", isDisabled = false, ...props }) => {
  return (
    <ButtonComponent type={type} isDisabled={isDisabled} {...props}>
      {props.children}
    </ButtonComponent>
  );
}

export default Button;
