import axios from "axios";
import {LogoApiSevices} from "../../shared/sevices/logo-api.sevices.js";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2'
});
export class NewsApiServices {
    apiKey = '4f562f3d87f4402f9e1cf3d53c3e0cc2';
    logoApi = new LogoApiSevices();

    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}