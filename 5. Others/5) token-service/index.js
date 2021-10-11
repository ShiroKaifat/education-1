class TokenService {

    constructor() {
        this.cbs = [];
    }

    subscribe(callback) {
        this.cbs.push(callback);
    }

    setToken(token) {
        if (token) {
            if (this.getToken() !== token) {
                localStorage.setItem('_token_', token);
                this.fireChangeEvent(token);

        } else {
                this.removeToken();
            }
        }
    }

    removeToken() {
        localStorage.removeItem('_token_');
        this.fireChangeEvent(null);
    }

    getToken() {
        return localStorage.getItem('_token_') || null;
    }

    fireChangeEvent(token) {
        this.cbs.forEach(cb => cb(token));
    }
}

window.TokenService = TokenService;

export default TokenService;
