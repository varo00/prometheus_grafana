# 1. ¿Cuál es la diferencia entre un Counter y un Gauge?
* Counter:
    
    * Solo puede incrementarse o reiniciarse (por ejemplo, tras un reinicio del servicio).
    * Se usa para medir métricas que solo aumentan con el tiempo, como:
        
        * Número total de peticiones HTTP (http_request_total)
        * Errores, accesos, registros, etc.

* Gauge:

    * Puede aumentar o disminuir, reflejando un valor actual
    * Ideal para métricas que cambian en tiempo real, como:

        * Uso de memoria
        * Temperatura del sistema
        * Número de peticiones en curso (http_requests_in_flight)

#

# 2. ¿Por qué Prometheus hace scraping en lugar de usar push?
Prometheus utiliza un modelo pull (scraping) por las siguientes razones:

* Control centralizado: Prometheus decide cuándo y cómo recolectar los datos, lo que facilita la gestión de múltiples targets.
* Detección automática de servicios a través de service discovery.
* Menor acoplamiento: los servicios no necesitan conocer a Prometheus ni preocuparse por su disponibilidad.
* Seguridad: evita que servicios remotos envíen datos maliciosos o falsos (modelo más confiable).

#

# 3. ¿Qué ventaja tiene usar Histogram frente a un simple Gauge para medir latencias?
* Un histograma no solo mide el valor actual, sino que permite:

    * Agrupar datos por rangos(buckets)
    * Obtener métricas con percentiles(p. ej., "el 95% de las peticiones tardan menos de 500ms")
    * Calcular promedios ponderados

* Un Gauge solo almacena un valor instantáneo, como la última latencia medida, sin información sobre la distribución.

#

# 4. ¿Qué problemas podrían surgir si usas muchas etiquetas dinámicas (por ejemplo, user ID)?
El uso excesivo de etiquetas dinámicas(alta cardinalidad), puede causar varios problemas:

* Explosión de series temporales:

    * Cada combinación única de etiquetas crea una nueva "time series"
    * Si usas _userID_, podrías tener miles o millones de series diferentes

* Alto consumo de memoria y CPU:

    * Prometheus debe almacenar y procesar todas esas series, afectando al rendimiento

* Dificultad para analizar datos:

    * Las consultas se vuelven más lentas y complejas
    * Grafana puede mostrar dashboards lentos o fallas al renderizar