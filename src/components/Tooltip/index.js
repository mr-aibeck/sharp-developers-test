import React from 'react';
import styled from 'styled-components';
import { font } from '../_mixins';

const TooltipWrap = styled.span`
  background: rgba(0, 0, 0, 0.79);
  border-radius: 4px;
  bottom: calc(100% + 15px);
  box-sizing: border-box;
  color: #d3d3d3;
  ${font.brandMiddle}
  line-height: 14px;
  left: 50%;
  opacity: 0;
  transition: all 0.2s ease-out;
  transform: translateX(-50%);
  padding: 14px 16px;
  position: absolute;
  text-align: center;
  visibility: hidden;
  width: 250px;
  z-index: 1;

  &::after {
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid rgba(0, 0, 0, 0.79);
    position: absolute;
    width: 0;
  }

  @media (max-width: 576px) {
    width: 145px;
  }
`;

const TooltipTitle = styled.span`
  display: block;
  ${font.brandLargeBold}
  margin-bottom: 10px;
`

const Wrap = styled.span`
  position: relative;

  &:hover {
    ${TooltipWrap} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Tooltip = ({ children = null, title = null, content = null }) => {
  return (
    <Wrap>
      {children}
      <TooltipWrap>
        <TooltipTitle>{title}</TooltipTitle>
        {content}
      </TooltipWrap>
    </Wrap>
  );
};

export default Tooltip;
