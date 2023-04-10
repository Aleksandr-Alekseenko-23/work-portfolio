import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-numberformat/locale-data/uk';
import { useAppSelector } from '../redux/hook/hook';
import { selectLanguage } from '../redux/slice/slice';
import {
  loadLocaleData,
  Messages,
} from '../utils/loadLocaleData/loadLocaleData';
import AppRoutes from '../routes/Routes';

const App: React.FC = () => {
  const locale = useAppSelector(selectLanguage);
  const [messages, setMessages] = useState<Messages | null>(null);

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
      <AppRoutes />
    </IntlProvider>
  );
};

export default App;
