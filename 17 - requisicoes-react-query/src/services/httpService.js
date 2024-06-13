import axios from 'axios';

class HttpService {
    constructor(baseURL = 'http://localhost/api-roupas') {
        this.baseUrl = baseURL;
        this.instance = axios.create({ baseURL: this.baseUrl });
    }

    get defaultHeaders() {
        return {
            'Authorization': localStorage.getItem('Authorization'),
            'Content-Type': 'application/json',
        };
    }

    async request(method, url, data = null, customHeaders = {}) {
        const headers = { ...this.defaultHeaders, ...customHeaders };
        const source = axios.CancelToken.source();
    
        const config = {
            method,
            url,
            headers,
            cancelToken: source.token
        };
    
        if (data) {
            config.data = data;
        }
    
        try {
            const response = await this.instance(config);
            return response.data; // Retorna somente os dados da resposta
        } catch (error) {
            throw error; // Rejeita a promessa com o erro
        } finally {
            source.cancel();
        }
    }    

    get(url, customHeaders = {}) {
        return this.request('get', url, null, customHeaders);
    }
    
    post(url, data, customHeaders = {}) {
        return this.request('post', url, data, customHeaders);
    }
    
    put(url, data, customHeaders = {}) {
        return this.request('put', url, data, customHeaders);
    }
    
    delete(url, customHeaders = {}) {
        return this.request('delete', url, null, customHeaders);
    }

    setBaseUrl(newUrl) {
        this.baseUrl = newUrl;
        this.instance.defaults.baseURL = newUrl;
    }
}

export default HttpService;