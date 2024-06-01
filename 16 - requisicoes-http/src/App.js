import XMLHTTPRequest from "./components/XMLHTTPRequest";
import XMLHTTPRequestPOST from "./components/XMLHTTPRequestPOST";
import FetchAPIGET from "./components/FetchAPIGET";
import FetchAPIPOST from "./components/FetchAPIPOST";
import AxiosGET from "./components/AxiosGET";
import AxiosPOST from "./components/AxiosPOST";
import MeuComponenteGET from "./components/MeuComponenteGET";
import MeuComponentePOST from "./components/MeuComponentePOST";

export default function App() {
    return (
        <div>
            <XMLHTTPRequest />
            <br /><br />
            <XMLHTTPRequestPOST />
            <br /><br />
            <FetchAPIGET />
            <br /><br />
            <FetchAPIPOST />
            <br /><br />
            <AxiosGET />
            <br /><br />
            <AxiosPOST />
            <br /><br />
            <MeuComponenteGET />
            <br /><br />
            <MeuComponentePOST />
        </div>
    );
}