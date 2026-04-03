import axios from 'axios';

import { keycloak } from "../auth/KeycloakProvider";

const http=axios.create({
    baseURL:"http://localhost:5000",
    headers:{"Content-type":"application/json"}
})

http.interceptors.request.use(async (config) => {
    if (keycloak?.authenticated) {
        await keycloak.updateToken(30);
        config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
});

export default http