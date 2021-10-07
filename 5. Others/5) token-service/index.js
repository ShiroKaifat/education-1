/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
    constructor() {
        this.cbs = [];
    }
    subscribe(callback) {
        this.cbs.push(callback);
    }
    setToken(token) {
        if (!token) {
            this.removeToken();
        }else {
            if (this.getToken() !== token) {
                localStorage.setItem('_token_', token);
                this.fireChangeEvent(token);
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
