import ApiService from './ApiService';

const ENDPOINTS = {
  LOGIN: '/api/login/',
  REGISTER: '/api/users/',
  LOGOUT: '/logout/',
};

class AuthService extends ApiService{
    constructor() {
        super();
        this.init();
    }

    init = () => {
        const token = this.getToken();
    
        if (token) {
        this.setAuthorizationHeader();
        this.api.setUnauthorizedCallback(this.destroySession.bind(this));
        }
    };

    setAuthorizationHeader = () => {
        const token = this.getToken();
        if(token) {
            this.api.attachHeaders({
                Authorization: `Bearer ${token}`
            })
        }
    }

    getToken = () => {
        return localStorage.getItem("accessToken");
      };

    createSession = (data) => {
        localStorage.setItem('accessToken', data.access);
    }

    destroySession = () => {
        localStorage.clear();
        this.api.removeHeaders(['Authorization']);
    };

    login = async (loginData) => {
        this.destroySession();
        const { data } = await this.apiClient.post("/api/login/", loginData);
        this.createSession(data);
        return data;
    };

    logout = async () => {
        this.destroySession();
        return { ok: true };
    };

    register = async (registerdata) => {
        console.log(registerdata);
        const { data } = await this.apiClient.post("/api/users/", registerdata);
        return data;
    };

    getUser = () => {
        const user = localStorage.getItem('user');
        console.log(user);
        return JSON.parse(user);
        
    };

    getActiveUser = async () => {
        const {data} = await this.apiClient.get("/api/users/me/");
        return data;
    };

    isAuthenticated = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user && user.access_token ? true : false;
    };
}

const authService = new AuthService();
export default authService;