<h1 align="center">🇦🇷 EstacionARG</h1>

<p align="center">
  <b>La solución definitiva para la gestión y localización de estacionamientos en la República Argentina.</b><br>
  <i>Optimizando la movilidad urbana mediante tecnología geoespacial.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-En%20Desarrollo-green?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome">
</p>

<hr>

<h2>🚀 Propósito del Proyecto</h2>
<p>
  <b>EstacionARG</b> nace con el objetivo de centralizar y democratizar el acceso a la información sobre espacios de estacionamiento (públicos y privados) en todo el territorio argentino. Utilizando datos en tiempo real y mapas interactivos, permitimos que los conductores reduzcan el tiempo de búsqueda y mejoren la fluidez del tráfico.
</p>

<h2>🛠️ Stack Tecnológico</h2>

<table>
  <tr>
    <td align="left"><b>Capa</b></td>
    <td align="left"><b>Tecnología</b></td>
    <td align="left"><b>Descripción</b></td>
  </tr>
  <tr>
    <td>📱 Mobile</td>
    <td>React Native</td>
    <td>Aplicación multiplataforma (iOS/Android) para usuarios finales.</td>
  </tr>
  <tr>
    <td>🌐 Web Admin</td>
    <td>React.js</td>
    <td>Panel de control para la gestión de puntos y analíticas.</td>
  </tr>
  <tr>
    <td>⚙️ Backend</td>
    <td>Node.js / Express</td>
    <td>API REST escalable para el procesamiento de datos.</td>
  </tr>
  <tr>
    <td>🐘 Base de Datos</td>
    <td>PostgreSQL + PostGIS</td>
    <td>Motor relacional con extensiones espaciales para cálculos de geocercas.</td>
  </tr>
  <tr>
    <td>🗺️ Mapas</td>
    <td>Google Maps API</td>
    <td>Renderizado de mapas, Places API y cálculo de rutas.</td>
  </tr>
  <tr>
    <td>☁️ Infraestructura</td>
    <td>Docker</td>
    <td>Contenerización para un despliegue consistente en cualquier entorno.</td>
  </tr>
</table>

<h2>📦 Características Principales</h2>
<ul>
  <li>📍 <b>Geolocalización Precisa:</b> Ubicación exacta de playas de estacionamiento y zonas permitidas en la calle.</li>
  <li>💰 <b>Comparativa de Tarifas:</b> Visualización de precios actualizados por hora/estadía.</li>
  <li>⚡ <b>Estado en Tiempo Real:</b> Indicadores de disponibilidad mediante reportes de la comunidad y sensores.</li>
  <li>💳 <b>Integración de Pagos:</b> Reserva y pago de plazas a través de billeteras virtuales locales.</li>
</ul>

<h2>📂 Estructura del Repositorio</h2>
<pre>
estacion-arg/
├── apps/
│   ├── mobile/        # Proyecto React Native
│   └── web-admin/     # Dashboard en React
├── services/
│   └── api-gateway/   # Backend Node.js
└── infrastructure/
    └── db/            # Scripts de migración de PostgreSQL
</pre>

<h2>🔧 Requisitos Previos</h2>
<p>
  Para ejecutar este proyecto en modo desarrollo, asegúrate de contar con:
</p>
<ul>
  <li>Node.js (v18.x o superior)</li>
  <li>PostgreSQL con extensión PostGIS instalada.</li>
  <li>Una <b>Google Maps API Key</b> válida con acceso a Maps SDK y Places API.</li>
</ul>

<hr>

<p align="center">
  Desarrollado con ❤️ para la comunidad de conductores de Argentina.
</p>
