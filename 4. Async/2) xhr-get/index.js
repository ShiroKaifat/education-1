function xhrGet(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send();
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    resolve(JSON.parse(xhr.response));
                } catch (err) {
                    resolve(xhr.response);
                }
            }
            reject(JSON.parse(xhr.response));
        }
    });
}

window.xhrGet = xhrGet;

export default xhrGet;
