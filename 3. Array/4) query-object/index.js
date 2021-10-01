function queryToObject(query) {
    return  query.slice(1).replace(/=/g, ':').split('&').reduce((acc, cur) => {
        try {
            if (!['', '?'].includes(cur)) {
                acc[cur.slice(0, cur.indexOf(':'))] = JSON.parse(cur.slice(cur.indexOf(':') + 1));
            }
        } catch {
            acc[cur.slice(0, cur.indexOf(':'))] = cur.slice(cur.indexOf(':') + 1);
        }
        return acc;
    }, {});
}

window.queryToObject = queryToObject;

export default queryToObject;
