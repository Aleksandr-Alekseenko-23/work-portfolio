import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import Navbar from './Navbar/Navbar';
import '@formatjs/intl-numberformat/locale-data/uk';
import { useAppSelector } from '../redux/hook/hook';
import { selectLanguage } from '../redux/slice/slice';
import {
  loadLocaleData,
  Messages,
} from '../utils/loadLocaleData/loadLocaleData';

const App: React.FC = () => {
  const locale = useAppSelector(selectLanguage);
  const [messages, setMessages] = useState<Messages | null>(null);
  console.log('1111', locale);
  console.log('1111', messages);

  useEffect(() => {
    async function bootstrapApplication(locale: string) {
      const loadedMessages = await loadLocaleData(locale);
      setMessages(loadedMessages);
    }

    bootstrapApplication(locale);
  }, [locale]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Navbar />
    </IntlProvider>
  );
};

export default App;
