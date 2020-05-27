import styled from 'styled-components';
import Icon from '../Icon';
import { font } from '../_mixins';

export const Wrap = styled.div`
  background: #151515;
`;

export const SocialBlock = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 90px;
  margin: 0 auto;
  min-width: 320px;
  max-width: 1170px;
  width: 100%;

  @media (max-width: 768px) {
    box-sizing: border-box;
    flex-direction: column;
    padding-top: 32px;
  }
`

export const SocialList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-grow: 2;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SocialItem = styled.li`
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

export const Copyright = styled.div`
  color: #444444;
  ${font.H1}
  display: flex;
  flex-grow: 1;
  ${font.spacing2};
  max-width: 205px;
  width: 100%;

  ${props => props.isSecond && `
    display: none;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 55px;
  `}

  @media (max-width: 768px) {
    ${props => !props.isSecond && 'display: none;'}

    ${props => props.isSecond && 'display: flex;'}
  }
`

export const FooterLinksWrap = styled.div`
  background: #181818;
`

export const FooterLinks = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  min-width: 320px;
  max-width: 1170px;
  width: 100%;
  padding: 0 48px;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    text-align: center;
  }
`

export const FooterLinksList = styled.ul`
  flex-grow: 1;
  max-width: 282px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`

export const FooterLinkItem = styled.li`
  box-sizing: border-box;
  color: #bbbbbb;
  cursor: pointer;
  ${font.H5}
  margin-bottom: 12px;
  max-width: 210px;
  width: 100%;
  padding-right: 5px;
  flex-wrap: wrap;

  &:hover {
    opacity: 0.8;
  }

  &:first-child {
    color: #444444;
    cursor: default;
    ${font.H3}
    margin: 20px 0;
    ${font.spacing1}

    &:hover {
      opacity: 1;
    }
  }
`

export const StyledIcon = styled(Icon)`
  @media(max-width: 768px) {
    transform: scale(0.8);
  }
`

export const BrowsersBlock = styled.div`
  align-items: flex-end;
  color: #5c5c5c;
  ${font.brandLarge}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 25px;
  text-align: right;

  @media(max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 42px;
    max-width: 260px;
  }

  p {
    width: 260px;
  }
`

export const BrowserIcon = styled(Icon)`
  margin-bottom: 20px;
`
