import styled from 'styled-components';
import Icon from '../Icon';
import { font } from '../_mixins';

export const HeaderWrap = styled.header`
  background: #000000 url("header-320.jpg") no-repeat center;
  background-size: cover;
  display: flex;
  height: 110px;
  width: 100%;

  @media(min-width: 576px) {
    background: #000000 url("header.jpg") no-repeat center;
    height: 155px;
  }
`;

export const MenuWrap = styled.nav`
  align-self: flex-end;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Menu = styled.ul`
  color: white;
  display: flex;
  justify-content: space-between;
  height: 45px;
  min-width: 320px;
  max-width: 1170px;
  width: 100%;

  @media(max-width: 576px) {
    display: none;
  }
`;

export const MenuItemContent = styled.span`
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`

export const MenuItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  ${font.H3}
  flex-grow: 1;
  justify-content: center;
  ${font.spacing1}
`;

export const HeaderTitle = styled.div`
  align-items: center;
  color: white;
  ${font.H2}
  height: 45px;
  ${font.spacing1}
  display: none;

  @media(max-width: 576px) {
    display: flex;
  }
`

export const MiniMenuButton = styled.div`
  cursor: pointer;
  display: none;
  left: 16px;
  top: 14px;
  position: absolute;
  width: 28px;

  @media(max-width: 576px) {
    display: block;
  }

  & hr {
    background: white;
    border: none;
    height: 2px;
  }
`

export const StyledIcon = styled(Icon)`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 16px;
  top: 18px;

  @media(max-width: 576px) {
    display: block;
  }
`
