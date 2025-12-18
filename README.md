<h1 align="center">🚗 EstacionAR</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-Clean%20Architecture-blue?style=for-the-badge" alt="Clean Arch">
  <img src="https://img.shields.io/badge/Monorepo-Turborepo-ef4444?style=for-the-badge" alt="Turborepo">
  <img src="https://img.shields.io/badge/Database-PostgreSQL%20%2B%20Prisma-336791?style=for-the-badge" alt="Database">
</p>

<p align="center">
  <b>Sistema de Reservas y Gestión de Estacionamiento de Alto Nivel</b><br>
  Arquitectura de software escalable, modular y orientada al dominio para el mercado argentino.
</p>

<hr>

<h2>🏗️ Arquitectura del Sistema</h2>
<p>
  EstacionAR no es solo una app; es una infraestructura diseñada bajo el paradigma de <b>Clean Architecture</b>, garantizando que las reglas de negocio sean independientes de los frameworks y la base de datos.
</p>

<ul>
  <li><b>Domain Layer:</b> Entidades puras y reglas de negocio.</li>
  <li><b>Application Layer:</b> Casos de uso (Reservas, Búsqueda, Pagos).</li>
  <li><b>Infrastructure Layer:</b> Implementaciones de Express, Prisma ORM y React Native.</li>
  <li><b>Shared Package:</b> DTOs e Interfaces compartidas mediante el monorepo para evitar duplicidad de tipos.</li>
</ul>

<h2>🛠️ Stack Tecnológico (Elite Tier)</h2>

<table align="center">
  <tr>
    <td align="left"><b>Ecosistema</b></td>
    <td align="left"><b>Tecnología</b></td>
    <td align="left"><b>Implementación</b></td>
  </tr>
  <tr>
    <td>📦 Estructura</td>
    <td><b>Turborepo</b></td>
    <td>Gestión de monorepo para pipelines ultra rápidos.</td>
  </tr>
  <tr>
    <td>📱 Mobile</td>
    <td><b>React Native + TS</b></td>
    <td>Arquitectura basada en Features (Feature-based).</td>
  </tr>
  <tr>
    <td>⚙️ Backend</td>
    <td><b>Node.js + Express</b></td>
    <td>Servicio REST con TypeScript y Middleware centralizado.</td>
  </tr>
  <tr>
    <td>🐘 Persistence</td>
    <td><b>PostgreSQL + Prisma</b></td>
    <td>Modelado de datos estricto y seguro (Type-safe).</td>
  </tr>
  <tr>
    <td>⚡ Real-Time</td>
    <td><b>Socket.io + Zustand</b></td>
    <td>Sincronización instantánea de disponibilidad y mapas.</td>
  </tr>
  <tr>
    <td>💳 Gateway</td>
    <td><b>MercadoPago API</b></td>
    <td>Integración nativa para la economía local argentina.</td>
  </tr>
  <tr>
    <td>🗺️ Geo</td>
    <td><b>Google Maps API</b></td>
    <td>Geolocalización avanzada y cálculos de distancia.</td>
  </tr>
</table>

<h2>📐 Estructura del Monorepo</h2>
<p>Utilizamos una estructura modular para facilitar la escalabilidad y el mantenimiento:</p>

<pre>
estacionar-monorepo/
├── 📂 apps/
│   ├── 📱 mobile/          # React Native (Zustand, Feature-based)
│   └── 💻 api/             # Express (Prisma, Clean Architecture)
├── 📂 packages/
│   ├── 📁 shared/          # Interfaces, Enums y DTOs (Typescript)
│   ├── 📁 config/          # Configuraciones de ESLint, Prettier, TS
│   └── 📁 ui/              # Componentes de diseño compartidos
└── turbo.json              # Configuración de pipeline
</pre>

<h2>🛡️ Estándares de Calidad y Seguridad</h2>
<ul>
  <li><b>Validación:</b> Implementación estricta de esquemas con <b>Zod</b> en cada entrada de la API.</li>
  <li><b>Seguridad:</b> Autenticación robusta vía <b>JWT</b> y manejo de sesiones.</li>
  <li><b>Errores:</b> Sistema centralizado mediante la clase <code>AppError</code> para respuestas consistentes.</li>
  <li><b>UI/UX:</b> Componentes atómicos y hooks personalizados para desacoplar la lógica de la vista.</li>
</ul>

<h2>🚦 Guía de Inicio Rápido</h2>

<h3>1. Clonar y Configurar</h3>
<pre>
git clone https://github.com/tu-usuario/estacion-ar.git
cd estacion-ar
npm install
</pre>

<h3>2. Variables de Entorno</h3>
<p>Configura tu <code>.env</code> en <code>apps/api/</code> y <code>apps/mobile/</code>:</p>
<ul>
  <li><code>DATABASE_URL</code> (PostgreSQL)</li>
  <li><code>GOOGLE_MAPS_KEY</code></li>
  <li><code>MERCADOPAGO_ACCESS_TOKEN</code></li>
</ul>

<h3>3. Ejecutar en Desarrollo</h3>
<pre>
# Levanta todo el ecosistema (Mobile & API)
npx turbo run dev
</pre>

<hr>

<h3 align="center">Checklist de Calidad EstacionAR ✅</h3>
<p align="center">
  [x] Arquitectura Limpia respetada | [x] Tipado estricto TS | [x] Manejo de Errores centralizado | [x] Lógica desacoplada
</p>

<p align="center">
  <i>"Liderando la transformación digital de la movilidad en Argentina."</i>
</p>
