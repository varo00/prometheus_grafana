const client = require('prom-client');

const httpRequestsTotal = new client.Counter({
    name: 'http_requests_total',
    help: 'Número total de peticiones HTTP'
});

const httpRequestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duración de las peticiones HTTP',
    buckets: [0.1, 0.5, 1, 1.5]
});

const httpRequestsInFlight = new client.Gauge({
    name: 'http_requests_in_flight',
    help: 'Número de peticiones en curso'
});

module.exports = {
    httpRequestsTotal,
    httpRequestDuration,
    httpRequestsInFlight,
    register: client.register
};
