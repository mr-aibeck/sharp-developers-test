import React from 'react';
import styled from 'styled-components';
import sprite from './css_sprites.png'

const IconComponent = styled.span`
  display: inline-block;
  vertical-align: middle;

  ${props => props.type === 'youtube' &&
    `
    height: 38px;
    width: 49px;
    background: url(${sprite}) -70px -55px;
  `}

  ${props => props.type === 'evernote' &&
    `
    width: 40px;
    height: 47px;
    background: url(${sprite}) -10px -55px;
  `}

  ${props => props.type === 'search' &&
    `
    width: 16px;
    height: 16px;
    background: url(${sprite}) -221px -132px;
  `}

  ${props => props.type === 'facebook' &&
    `
    width: 41px;
    height: 41px;
    background: url(${sprite}) -221px -10px;
  `}

  ${props => props.type === 'twitter' &&
    `
    width: 48px;
    height: 38px;
    background: url(${sprite}) -139px -55px;
  `}

  ${props => props.type === 'git' &&
    `
    width: 46px;
    height: 39px;
    background: url(${sprite}) -10px -122px;
  `}

  ${props => props.type === 'white_search' &&
    `
    width: 35px;
    height: 35px;
    background: url(${sprite}) -76px -122px;
  `}

  ${props => props.type === 'pinterest' &&
    `
    width: 33px;
    height: 41px;
    background: url(${sprite}) -221px -71px;
  `}
  ${props => props.type === 'browser_icons' &&
    `
    width: 191px; height: 25px;
    background: url(${sprite}) -10px -10px;
  `}
`;

const Icon = ({ type, ...props }) => {
  if (!type) {
    throw new Error('Unknown icon name!');
  }

  return (
    <IconComponent type={type} {...props} />
  );
};

export default Icon;
