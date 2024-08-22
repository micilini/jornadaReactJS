import { useTranslation } from 'react-i18next';//Basta apenas importar o Hook que realiza as traduções.

const TranslatorService = ({ path }) => {
  const { t } = useTranslation(); // Chama a função responsável por realizar as traduções

  // Aqui, nós estamos retornando a função passando como parametro o caminho (path) de onde está localizado o texto que desejamos traduzir.
  return t(path);
}

export default TranslatorService;