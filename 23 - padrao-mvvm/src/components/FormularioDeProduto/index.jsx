import useFormularioDeProdutoModel from './model';
import FormularioDeProdutoView from './view';

const FormularioDeProduto = () => {
  const formularioDeProdutoModel = useFormularioDeProdutoModel();
  return(
    <>
      <FormularioDeProdutoView {...formularioDeProdutoModel} />
    </>
  );
};

export default FormularioDeProduto;