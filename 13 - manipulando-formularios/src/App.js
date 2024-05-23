import FormularioClasse1 from "./components/FormularioClasse1";
import FormularioClasse2 from "./components/FormularioClasse2";
import FormularioClasse3 from "./components/FormularioClasse3";

import FormularioEstado1 from "./components/FormularioEstado1";
import FormularioEstado2 from "./components/FormularioEstado2";
import FormularioEstado3 from "./components/FormularioEstado3";

import FormularioForms1 from "./components/FormularioForms1";
import FormularioForms2 from "./components/FormularioForms2";

export default function App() {
    return (
        <div>
            <FormularioClasse1 />
            <FormularioClasse2 />
            <FormularioClasse3 />
            <br /><br />
            <FormularioEstado1 />
            <FormularioEstado2 />
            <FormularioEstado3 />
            <br /><br />
            <FormularioForms1 />
            <FormularioForms2 />
        </div>
    );
}