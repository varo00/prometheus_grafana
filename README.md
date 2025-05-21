# Monitorización Node.js con Prometheus y Grafana

Este proyecto demuestra cómo monitorizar una API Node.js usando Prometheus y Grafana.

## Servicios incluidos

- **Node.js API**: expone rutas y métricas.
- **Prometheus**: recolecta métricas.
- **Grafana**: visualiza métricas.

## Instrucciones

1. Clona el proyecto y navega al directorio.
2. Ejecuta `docker-compose up`.
3. Accede a:
   - http://localhost:8080/cities
   - http://localhost:8080/metrics
   - http://localhost:9090 (Prometheus)
   - http://localhost:3000 (Grafana)

## Visualizaciones en Grafana

- Total de peticiones
- Tiempo medio de respuesta
- Peticiones en vuelo
- Por código de estado

## Métricas Prometheus

- `http_requests_total`
- `http_request_duration_seconds`
- `http_requests_in_flight`
