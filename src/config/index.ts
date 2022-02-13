const URL_BACKEND = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/api/rodrigoflix'
    : 'https://portfolio-mini-server.vercel.app/api/rodrigoflix';

export default { URL_BACKEND };
