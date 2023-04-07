import React, { useState, useEffect } from 'react';
import { NavList, NavListItem, NavLinkItem, Wrapper } from './Navbar.styled';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hook';
import { changeLanguage, selectLanguage } from '../../redux/slice/slice';

console.log(
  'FormattedMessage',
  <FormattedMessage id="" defaultMessage="Home" />
);

const links = [
  {
    id: '1',
    label: <FormattedMessage id="navbarLinkHome" defaultMessage="Home" />,
    path: '/home',
  },
  {
    id: '2',
    label: <FormattedMessage id="navbarLinkProject" defaultMessage="Project" />,
    path: '/project',
  },
  {
    id: '3',
    label: <FormattedMessage id="navbarLinkAbout" defaultMessage="About" />,
    path: '/about',
  },
  {
    id: '4',
    label: (
      <FormattedMessage id="navbarLinkContacts" defaultMessage="Contacts" />
    ),
    path: '/contacts',
  },
];

type Language = 'en' | 'uk';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const currentLanguage = useAppSelector(selectLanguage);

  console.log('navbar', language);
  console.log('isLanguage', currentLanguage);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentLanguage !== language) {
      setLanguage(currentLanguage as Language);
    }
  }, [currentLanguage, language]);

  const toggleLanguage = (): void => {
    const newLanguage = language === 'en' ? 'uk' : 'en';
    setLanguage(newLanguage);
    dispatch(changeLanguage(newLanguage));
  };

  return (
    <Wrapper>
      <nav>
        <NavList>
          {links.map(({ label, path, id }) => (
            <NavListItem key={id}>
              <NavLinkItem to={path}>{label}</NavLinkItem>
            </NavListItem>
          ))}
        </NavList>
      </nav>
      <div>
        <select id="language-select" value={language} onChange={toggleLanguage}>
          <option value="en">En</option>
          <option value="uk">Ua</option>
        </select>
      </div>
    </Wrapper>
  );
};

export default Navbar;
