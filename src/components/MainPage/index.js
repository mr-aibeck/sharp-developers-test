import React from 'react';
import {
  Wrap,
  Content,
  ContentWrap,
  Sidebar,
  SidebarBlock,
  Title,
  TitleWrap,
  Form,
  SidebarBlockTitle,
  FormNotice,
  StyledButton,
  Link,
  SubTitle,
  ItemsList,
  Item,
  ItemTitle,
  ItemName,
  ItemImg,
  LoaderWrap,
  SearchInput,
  FormInput,
  LoadLink
} from './styled';

import Button from '../Button';
import Tooltip from '../Tooltip';
import Loader from '../Loader';

const items = [
  {
    prop: '2 props',
    value: 'Unlimited exchange'
  },
  {
    prop: '1 props',
    value: 'International exchange'
  },
  {
    prop: '3 props, all',
    value: 'Additional services'
  },
  {
    prop: '5 props',
    value: 'Support'
  },
  {
    prop: '2 props',
    value: 'Holiday works'
  },
  {
    prop: 'not in access',
    value: 'Postal delivery'
  },
  {
    prop: '2 props',
    value: 'Document managment'
  },
  {
    prop: '1 props',
    value: 'Promotions'
  },
];

const MainPage = () => {
  return (
    <Wrap>
      <ContentWrap>
        <Content>
          <TitleWrap>
            <Title>ParrotWings Exchange</Title>
            <SearchInput
              withIcon
              iconType="search"
              placeholder="Search..."
              size="small"
            />
          </TitleWrap>

          <SubTitle>Products</SubTitle>

          <ItemsList>
            {items.map((item, index) => (
              <Item>
                <ItemImg>
                  <img src={'parrot' + (index + 1) + '.png'} alt={item.value} />
                </ItemImg>
                <ItemTitle>{item.prop}</ItemTitle>
                <ItemName>{item.value}</ItemName>
                <Tooltip
                  title="Popup header"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
                >
                  <Button type="simple">Order</Button>
                </Tooltip>
              </Item>
            ))}
          </ItemsList>

          <LoadLink>
            More products...
          </LoadLink>
        </Content>

        <Sidebar>
          <SidebarBlock>
            <SidebarBlockTitle>
              Sign Up
            </SidebarBlockTitle>
            <Form>
              <FormInput type="text" placeholder="First Name" required />
              <FormInput type="text" placeholder="Last Name" required />
              <FormInput type="email" placeholder="Email" required />
              <FormNotice>
                By creating a PW Exchange Account you acknowledge that
                you have read, understood and agree to the
                &nbsp;
                <Link>Terms of Use</Link>
                &nbsp;
                and
                &nbsp;
                <Link>Privacy Policy</Link>.
                &nbsp;
              </FormNotice>
              <StyledButton type="default">Sign Up</StyledButton>
            </Form>
          </SidebarBlock>

          <SidebarBlock isDisabled>
            <SidebarBlockTitle>
              Online Monitor
            </SidebarBlockTitle>
            <LoaderWrap>
              <Loader />
            </LoaderWrap>
            <StyledButton isDisabled type="default">Connect</StyledButton>
          </SidebarBlock>
        </Sidebar>
      </ContentWrap>
    </Wrap>
  );
}

export default MainPage;
