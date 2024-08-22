import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

//Nossas traduções estão em arquivos separados dentro da pasta locales.
import translations from './locales'

// Configuração inicial do i18n
const i18nConfig = {
  resources: translations,  // Em 'resources' nós passamos nossas traduções (translations).
  fallbackLng: 'pt-BR',     // Em 'fallbackLng', nós informamos qual é o idioma padrão que será carregado, caso o browser não consiga detectar sozinho.
  defaultNS: 'translations' // O 'defaultNS' é o namespace padrão. 'translations' significa que nossas traduções estão no arquivo translations.json.
}

// Inicializa o i18n
i18n
  .use(LanguageDetector) // Usa o detector de idioma do seu browser
  .use(initReactI18next) // Usa o pacote do i18n específico para ReactJS
  .init(i18nConfig) // Usa nossas configurações Inciais (i18nConfig)

export default i18n;//Exporta o i18n para que possamos usá-lo em outros lugares do nosso app.