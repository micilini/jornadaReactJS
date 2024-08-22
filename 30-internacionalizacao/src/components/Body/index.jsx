import './body.css';

//Importa o serviço de tradução
import TranslatorService from '../../services/TranslatorService';

const Body = () => {
    return(
        <section>
            <h2><TranslatorService path="body.h2"/></h2>
            <p><a href="https://micilini.com/conteudos/reactjs" target="__blank">🔥 <TranslatorService path="body.jornada"/> ReactJS</a></p>
            <p><a href="https://micilini.com/conteudos/typescript">✨ <TranslatorService path="body.jornada"/> Typescript</a></p>
            <p><a href="https://micilini.com/conteudos/javascript">💫 <TranslatorService path="body.jornada"/> Javascript</a></p>
            <p><a href="https://micilini.com/">⚡ <TranslatorService path="body.outras"/></a></p>
        </section>
    );
}

export default Body;