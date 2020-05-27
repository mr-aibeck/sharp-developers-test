import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import { font } from '../_mixins';
import background from './assets/background.jpg';

export const Wrap = styled.div`
  background: url(${background}) repeat;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 48px;

  @media(max-width: 885px) {
    margin-right: 0;
  }

  @media(max-width: 576px) {
    padding: 24px 30px;
  }
`;

export const ContentWrap = styled.article`
  background: #e9e9e9;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  min-width: 320px;
  max-width: 1170px;
  padding: 40px 48px;
  width: 100%;

  @media(max-width: 885px) {
    flex-direction: column;
  }

  @media(max-width: 576px) {
    padding: 0;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;

  @media(max-width: 885px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 48px;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  @media(max-width: 576px) {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  color: #121212;
  ${font.H1}
  ${font.spacing1}
  margin-right: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const SidebarBlockTitle = styled.div`
  border-bottom: 1px solid #c3c3c3;
  color: #121212;
  ${font.H2}
  padding: 0 0 15px 10px;
  position: relative;
  margin-bottom: 13px;

  &::after {
    content: '';
    background: #e4e4e4;
    bottom: -2px;
    left: 0;
    position: absolute;
    height: 1px;
    width: 100%;
  }
`

export const SidebarBlock = styled.div`
  background: #dadada;
  box-sizing: border-box;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
  width: 338px;
  padding: 20px;

  ${SidebarBlockTitle} {
    ${props => props.isDisabled && 'opacity: 0.25;'}
  }

  ${props => props.isDisabled && `
    opacity: 0.85;
  `}

  &:first-child {
    @media(max-width: 576px) {
      display: none;
    }
  }

  @media(max-width: 576px) {
    border-radius: 0;
    margin: 0 auto;
    width: 100%;
  }
`

export const FormNotice = styled.p`
  ${font.brandSmall}
  margin-bottom: 14px;
  text-align: center;
`

export const StyledButton = styled(Button)`
  margin-left: auto;
`

export const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 576px) {
    display: none;
  }
`

export const SubTitle = styled.h2`
  ${font.H3}
  margin-top: 22px;
  position: relative;

  &::before {
    background: #933435;
    bottom: 7px;
    left: -27px;
    content: '';
    height: 8px;
    position: absolute;
    width: 19px;
  }

  @media(max-width: 576px) {
    margin-top: 0;
    margin-left: 12px;
  }
`

export const ItemsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 32px 0 0 -26px;

  @media(max-width: 885px) {
    margin-left: 0;
  }
`
export const Item = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 16%;
  margin: 0 0 48px 23px;
  width: 120px;

  @media(max-width: 1165px) {
    flex-basis: 20%;
  }

  @media(max-width: 1073px) {
    flex-basis: 28%;
  }

  @media(max-width: 1003px) {
    flex-basis: 44%;
  }

  @media(max-width: 885px) {
    margin-left: 0;
    flex-basis: 33.33%;
  }

  @media(max-width: 576px) {
    flex-basis: 50%;
  }
`
export const ItemTitle = styled.div`
  ${font.brandSmall}
  margin-bottom: 4px;
`
export const ItemName = styled.div`
  ${font.H4}
  margin-bottom: 10px;
  max-width: 120px;
  overflow: hidden;
  padding-bottom: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const ItemImg = styled.div`
  box-shadow: 0px 0 5px rgba(0, 0, 0, 0.35);
  border: 1px solid #9d9d9d;
  margin-bottom: 10px;
  overflow: hidden;
  height: 155px;
  width: 110px;

  img {
    height: 100%;
    width: 100%;
  }
`

export const LoaderWrap = styled.div`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
`

export const SearchInput = styled(Input)`
  flex-grow: 1;
  max-width: 252px;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`

export const LoadLink = styled.span`
  align-self: center;
  border-bottom: 1px solid #444;
  color: #444444;
  cursor: pointer;
  ${font.brandLargest}

  &:hover {
    opacity: 0.8;
  }
`
