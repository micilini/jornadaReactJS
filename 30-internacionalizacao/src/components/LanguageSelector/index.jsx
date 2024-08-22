import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleChange} defaultValue={i18n.language}>
      <option value="pt">Português do Brasil (PT-BR)</option>
      <option value="en">Inglês (EN-UD)</option>
    </select>
  );
};

export default LanguageSelector;