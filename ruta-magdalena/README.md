# Camí de la Magdalena

Itinerario oficial de la Romeria de les Canyes señalizado al estilo del Camino de Santiago, en dos sentidos: la **anada** de la Plaça Major (Ajuntament) de Castelló a la **Ermita de la Magdalena** y la **tornada** por el Caminàs y el Lledó de vuelta a la Plaça Major.

- `index.html`: mapa de los dos recorridos, las placas de punto de paso (fites) de cada uno, el itinerario oficial y la ficha técnica de las placas.
- `editor.html`: editor para marcar a mano el trazado de la anada y colocar sus placas sobre un mapa real, o grabarlo caminando con el GPS. Lo que se guarda lo usa la guía en ese mismo dispositivo, y se puede exportar para fijarlo en el repositorio.
- `ruta.gpx`: los dos trazados y todos los puntos de paso para cargar en una app de GPS (Wikiloc, OsmAnd, Google My Maps…).
- `manifest.webmanifest`, `sw.js`, `icons/`: la convierten en app instalable que funciona sin conexión.

## Descargar la app

**Android:** en la página [Releases](../../releases/tag/app-android) del repositorio descarga `camino-magdalena.apk` desde el móvil y ábrela. La primera vez Android pide permiso para instalar apps de origen desconocido. La APK se compila sola con GitHub Actions (`.github/workflows/android.yml`) cada vez que cambia la ruta o el proyecto `android/`.

**iPhone (y también Android):** publica el repositorio con GitHub Pages (*Settings → Pages → Deploy from a branch → main / root*), abre `https://<usuario>.github.io/<repo>/ruta-magdalena/` en Safari y pulsa *Compartir → Añadir a pantalla de inicio*. Queda como app con icono y funciona sin cobertura.

Dentro de la app, el botón **Mostrar mi posición** sitúa al caminante en el mapa y le dice a qué distancia está de la fita más cercana.

### Anada (Plaça Major → Ermita de la Magdalena) · placas azules

| Fita | Punto de paso |
|---|---|
| 01 | Plaça Major · Ajuntament |
| 02 | Plaça de l'Herba |
| 03 | Carrer de Colom |
| 04 | Carrer Major |
| 05 | Plaça de Maria Agustina (el Toll) |
| 06 | Avinguda dels Caputxins, per la part esquerra |
| 07 | Plaça del Primer Molí |
| 08 | Camí dels Molins |
| 09 | Plaça del Segon Molí |
| 10 | Camí de la Travessera |
| 11 | Camí Caminàs |
| 12 | Parada a l'Ermita de Sant Roc de Canet |
| 13 | Camí de l'Algepsar |
| 14 | Camí Vell de Barcelona |
| 15 | Ermita de la Magdalena · Castell Vell |

### Tornada (Ermita de la Magdalena → Plaça Major) · placas verdes

| Fita | Punto de paso |
|---|---|
| 01 | Ermita de la Magdalena |
| 02 | Camí de l'Algepsar |
| 03 | Camí que voreja l'Autopista |
| 04 | Camí de Boira |
| 05 | Caminàs · Sant Roc de Canet |
| 06 | Basílica del Lledó |
| 07 | Camí de Lledó (fins als Bous) |
| 08 | Camí de la Plana |
| 09 | Carrer de Sant Roc |
| 10 | Forn del Pla · Les Tres Caigudes |
| 11 | Carrer de Sant Fèlix |
| 12 | Plaça del Descarregador (Clavé) |
| 13 | Carrer d'Enmig |
| 14 | Porta del Sol |
| 15 | Carrer de les Salines (Gasset) |
| 16 | Plaça de la Pau |
| 17 | Carrer Major |
| 18 | Carrer Arxiprest Balaguer |
| 19 | Plaça Vella (Major) · Concatedral |

Las coordenadas son aproximadas y el trazado está simplificado, así que los kilómetros que salen en las placas son orientativos. Antes de fabricar las placas hay que medirlos con GPS sobre el terreno.
