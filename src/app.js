const express = require('express');
const { collectDefaultMetrics } = require('prom-client');
const metrics = require('./config/metrics');

const app = express();
const PORT = 8080;

// Inicializa métricas por defecto
collectDefaultMetrics();

app.get('/cities', (req, res) => {
    metrics.httpRequestsInFlight.inc();

    const end = metrics.httpRequestDuration.startTimer();

    res.json([{ name: 'Madrid' }, { name: 'Barcelona' }]);

    metrics.httpRequestsTotal.inc();
    metrics.httpRequestsInFlight.dec();
    end();
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', metrics.register.contentType);
    res.end(await metrics.register.metrics());
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});