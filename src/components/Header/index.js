import React from 'react';
import {
  HeaderWrap,
  HeaderTitle,
  MenuWrap,
  Menu,
  MenuItem,
  MiniMenuButton,
  MenuItemContent,
  StyledIcon
} from './styled';

const menu = [
  'Home',
  'Credits',
  'Exchange',
  'Patners',
  'Stock',
  'Holding',
  'About',
];

const Header = () => {
  return (
    <HeaderWrap>
      <MiniMenuButton>
        <hr />
        <hr />
        <hr />
      </MiniMenuButton>

      <StyledIcon type="white_search" />

      <MenuWrap>
        <Menu>
          {menu.map((item) => (
            <MenuItem key={item}>
              <MenuItemContent>{item}</MenuItemContent>
            </MenuItem>
          ))}
        </Menu>

        <HeaderTitle>
          ParrotWings Exchange
        </HeaderTitle>
      </MenuWrap>
    </HeaderWrap>
  );
}

export default Header;
