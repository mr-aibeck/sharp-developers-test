import React from 'react';

import {
  Wrap,
  SocialBlock,
  SocialList,
  SocialItem,
  Copyright,
  FooterLinks,
  FooterLinksList,
  FooterLinkItem,
  FooterLinksWrap,
  StyledIcon,
  BrowserIcon,
  BrowsersBlock
} from './styled'

const social = [
  'evernote',
  'facebook',
  'pinterest',
  'twitter',
  'youtube',
  'git',
]

const Footer = () => {
  return (
    <Wrap>
      <SocialBlock>
        <SocialList>
          {social.map((item) =>
            <SocialItem key={item.id}>
              <StyledIcon type={item} />
            </SocialItem>
          )}
        </SocialList>

        <Copyright>
          © Parrot Wings
        </Copyright>
      </SocialBlock>

      <FooterLinksWrap>
        <FooterLinks>
          <FooterLinksList>
            <FooterLinkItem>Recruitment Info</FooterLinkItem>
            <FooterLinkItem>Candidate First Name: Username</FooterLinkItem>
            <FooterLinkItem>Candidate First Name: Username</FooterLinkItem>
            <FooterLinkItem>Spent Time: X hours</FooterLinkItem>
            <FooterLinkItem>Email: username@server.name</FooterLinkItem>
            <FooterLinkItem>Test date: dd.mm,yyyy</FooterLinkItem>
          </FooterLinksList>

          <FooterLinksList>
            <FooterLinkItem>Resources</FooterLinkItem>
            <FooterLinkItem>Loader icon --- search on Fontello.com</FooterLinkItem>
            <FooterLinkItem>Icons --- Entypo</FooterLinkItem>
            <FooterLinkItem>Fonts --- search in this file</FooterLinkItem>
            <FooterLinkItem>Background --- standart situation: designer lose file </FooterLinkItem>
          </FooterLinksList>

          <FooterLinksList>
            <FooterLinkItem>Navigation</FooterLinkItem>
            <FooterLinkItem>Development</FooterLinkItem>
            <FooterLinkItem>Application</FooterLinkItem>
            <FooterLinkItem>Holding</FooterLinkItem>
            <FooterLinkItem>About</FooterLinkItem>
          </FooterLinksList>

          <BrowsersBlock>
            <BrowserIcon type="browser_icons" />
            <p>
              Project should work on next stack:
              IE11, actual version of Firefox, Chrome
              on desktop and android, Opera (opera mini),
              Safari on mac and ios.
            </p>
          </BrowsersBlock>
        </FooterLinks>

        <Copyright isSecond>
          © Parrot Wings
        </Copyright>

      </FooterLinksWrap>
    </Wrap>
  );
};

export default Footer;
