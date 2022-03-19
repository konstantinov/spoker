const API_URL = 'https://data.mongodb-api.com/app/api-kfrin/endpoint';

export default {
    createSession: (data) => fetch(`${API_URL}/session/create`, { method: 'POST', body: JSON.stringify(data) }).then(r => r.json()),
    getSession: ({ sessionId, secret, fetch }) => fetch(`${API_URL}/session/get`, { method: 'POST', body: JSON.stringify({ sessionId, secret }) }).then(r => r.json()),
}