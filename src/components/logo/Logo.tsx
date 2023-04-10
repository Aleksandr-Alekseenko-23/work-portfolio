import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';

const Logo: React.FC = () => {
  return (
    <Link to={'/home'}>
      <img src={logo} alt="logo" width={167} height={60} />
    </Link>
  );
};

export default Logo;
