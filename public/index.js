window.addEventListener('message', (e) => {
    if (!e.origin.endsWith('wwppc.tech') || e.data == null || (typeof e.data.ev != 'string' && e.data != 'connect')) return;
    if (e.data === 'connect') {
        e.source.postMessage('connect', e.origin);
        return;
    }
    const respond = (res) => e.source.postMessage({ ev: e.data.ev, res: res }, e.origin);
    const action = e.data.ev.split(':')[0];
    switch (action) {
        case 'get':
            if (typeof e.data.data != 'string') return;
            respond(localStorage.getItem(e.data.data));
            break;
        case 'set':
            if (!Array.isArray(e.data.data) || typeof e.data.data[0] != 'string' || typeof e.data.data[1] != 'string') return;
            localStorage.setItem(e.data.data[0], e.data.data[1]);
            respond();
            break;
        case 'delete':
            if (typeof e.data.data != 'string') return;
            localStorage.removeItem(e.data.data);
            respond();
            break;
        default:
            respond();
    }
});