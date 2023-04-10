import { FormattedMessage } from 'react-intl';

export const links = [
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
    label: <FormattedMessage id="navbarLinkAbout" defaultMessage="About us" />,
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
