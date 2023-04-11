import React from 'react';
import LanguageSwitch from '../languageSwitch/LanguageSwitch';
import Logo from '../logo/Logo';
import Navbar from '../Navbar/Navbar';
import { Wrapper } from './Header.styled';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo />
      <Navbar />
      <LanguageSwitch />
    </Wrapper>
  );
};

export default Header;
