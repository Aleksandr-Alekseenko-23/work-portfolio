import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hook';
import { changeLanguage, selectLanguage } from '../../redux/slice/slice';

type Language = 'en' | 'uk';

const LanguageSwitch: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const currentLanguage = useAppSelector(selectLanguage);

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
    <div>
      <select id="language-select" value={language} onChange={toggleLanguage}>
        <option value="en">En</option>
        <option value="uk">Ua</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
