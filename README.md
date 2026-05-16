# League of Legends — Proyecto Web

Proyecto académico con **8 pantallas** + página de inicio, hechas con **HTML, CSS y JavaScript** puros.
Listo para abrir en Visual Studio Code.

## Estructura

```
league-project/
├── index.html          (Inicio + carrusel)
├── dashboard.html      (1. Dashboard de Métricas)
├── inventario.html     (2. Control de Stock / Objetos)
├── perfil.html         (3. Ficha de Campeón)
├── configuracion.html  (4. Configuración del Sistema)
├── eventos.html        (5. Calendario de Eventos)
├── reservas.html       (6. Formulario de Reservas)
├── historial.html      (7. Historial de Partidas)
├── galeria.html        (8. Galería / Catálogo)
├── css/
│   ├── style.css       (estilos globales — paleta dorado/azul LoL)
│   ├── dashboard.css
│   └── perfil.css
├── js/
│   ├── app.js          (navbar activa, tema oscuro/claro, toasts)
│   ├── dashboard.js    (gráficos de barras, roles)
│   └── calendario.js   (calendario interactivo)
├── img/                (campeones / logos / fondos — agregá tus imágenes)
└── data/
    └── campeones.json  (datos de ejemplo)
```

## Cómo usar

1. Descomprimí el .zip
2. Abrí la carpeta en **Visual Studio Code**
3. Click derecho en `index.html` → **Open with Live Server**
   (o simplemente abrí los .html en el navegador)

## Características

- ✅ 9 archivos HTML independientes
- ✅ CSS modular (3 archivos)
- ✅ JS modular (3 archivos)
- ✅ Diseño temático LoL (dorado #c8aa6e + azul #0397ab + fondo oscuro)
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Tema claro/oscuro persistente con `localStorage`
- ✅ Navegación coherente entre pantallas
- ✅ Datos de ejemplo (campeones, objetos, partidas, eventos)

## Tipografía y paleta

- Fuente: Spiegel (sustituida por Trebuchet MS)
- Dorado LoL: `#c8aa6e`
- Dorado claro: `#f0e6d2`
- Azul hextech: `#0397ab`
- Fondo oscuro: `#010a13`
