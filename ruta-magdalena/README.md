# Camí de la Magdalena

Ruta señalizada al estilo del Camino de Santiago desde la **Plaça Major (Ajuntament) de Castelló** hasta la **Ermita de la Magdalena**, siguiendo el itinerario de ida de la Romeria de les Canyes.

- `index.html`: mapa del recorrido, las 11 placas de punto de paso (fites) y la ficha técnica de la placa.
- `ruta.gpx`: trazado y puntos de paso para cargar en una app de GPS (Wikiloc, OsmAnd, Google My Maps…).
- `manifest.webmanifest`, `sw.js`, `icons/`: la convierten en app instalable que funciona sin conexión.

## Descargar la app

**Android:** en la página [Releases](../../releases/tag/app-android) del repositorio descarga `camino-magdalena.apk` desde el móvil y ábrela. La primera vez Android pide permiso para instalar apps de origen desconocido. La APK se compila sola con GitHub Actions (`.github/workflows/android.yml`) cada vez que cambia la ruta o el proyecto `android/`.

**iPhone (y también Android):** publica el repositorio con GitHub Pages (*Settings → Pages → Deploy from a branch → main / root*), abre `https://<usuario>.github.io/<repo>/ruta-magdalena/` en Safari y pulsa *Compartir → Añadir a pantalla de inicio*. Queda como app con icono y funciona sin cobertura.

Dentro de la app, el botón **Mostrar mi posición** sitúa al caminante en el mapa y le dice a qué distancia está de la fita más cercana.

| Fita | Punto de paso | Tipo |
|---|---|---|
| 01 | Plaça Major · Ajuntament | Inicio |
| 02 | Plaça de l'Herba | Casco antiguo |
| 03 | Plaça de Maria Agustina · el Toll | Casco antiguo |
| 04 | Primer Molí | Salida de la ciudad |
| 05 | Pas del Riu Sec | Huerta |
| 06 | Camí de la Travessa | Huerta |
| 07 | El Caminàs | Vía romana |
| 08 | Ermita de Sant Roc de Canet | Parada para almorzar |
| 09 | Creuament de la N-340 | Precaución |
| 10 | Peu del Tossal | Al pie del cerro |
| 11 | Ermita de la Magdalena · Castell Vell | Meta |

Las coordenadas son aproximadas y el trazado está simplificado, así que los kilómetros que salen en las placas son orientativos. Antes de fabricar las placas hay que medirlos con GPS sobre el terreno.
