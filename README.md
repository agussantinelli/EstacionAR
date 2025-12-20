<h1 align="center">🚗 EstacionAR</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-Clean%20Architecture-blue?style=for-the-badge" alt="Clean Arch">
  <img src="https://img.shields.io/badge/Monorepo-Turborepo-ef4444?style=for-the-badge" alt="Turborepo">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
</p>

<p align="center">
  <a href="https://drive.google.com/drive/folders/1Mrx5P99qKzFQkeS_k2Ay6ri0yqkENoVK?usp=drive_link">
    <img src="https://img.shields.io/badge/Documentación-Google%20Drive-34A853?style=for-the-badge&logo=googledrive&logoColor=white" alt="Project Documentation">
  </a>
</p>

<p align="center">
  <b>Sistema de Reservas y Gestión de Estacionamiento de Alto Nivel</b><br>
  Arquitectura de software escalable, modular y orientada al dominio para el mercado argentino.
</p>

<hr>

<h2>💼 Modelo de Negocio y Oportunidad</h2>
<p>
  En las grandes urbes, la búsqueda de estacionamiento representa una de las mayores fricciones en la movilidad urbana, generando pérdidas de tiempo de hasta 20 minutos por trayecto en centros densamente poblados como CABA, Córdoba o Rosario.
</p>

<p>
  <b>EstacionAR</b> capitaliza esta oportunidad mediante un ecosistema digital que conecta la oferta ociosa con la demanda activa:
</p>

<ul>
  <li><b>Oportunidad de Mercado:</b> Digitalización de playas de estacionamiento tradicionales que hoy operan de forma analógica, permitiéndoles aumentar su tasa de ocupación mediante reservas anticipadas.</li>
  <li><b>Monetización:</b> Modelo de comisión por transacción (Service Fee) y suscripciones Premium para usuarios corporativos que requieren facturación centralizada y espacios garantizados.</li>
  <li><b>Valor Agregado:</b> Integración con <b>MercadoPago</b> para eliminar la fricción del efectivo y uso de <b>Google Maps API</b> para una navegación <i>door-to-door</i> sin interrupciones.</li>
</ul>

<hr>

<h2>🏗️ Arquitectura del Sistema</h2>
<p>
  Diseñada bajo el paradigma de <b>Clean Architecture</b>, garantizando que las reglas de negocio sean independientes de los frameworks y la base de datos.
</p>

<ul>
  <li><b>Domain Layer:</b> Entidades puras y reglas de negocio.</li>
  <li><b>Application Layer:</b> Casos de uso (Reservas, Búsqueda, Pagos).</li>
  <li><b>Infrastructure Layer:</b> Implementaciones de Express, Prisma ORM y React Native.</li>
  <li><b>Shared Package:</b> DTOs e Interfaces compartidas mediante el monorepo para evitar duplicidad de tipos.</li>
</ul>

<hr>

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
    <td>🐘 Database</td>
    <td>
      <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" alt="Postgres">
    </td>
    <td>Motor relacional robusto para datos críticos.</td>
  </tr>
  <tr>
    <td>💎 ORM</td>
    <td>
      <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma">
    </td>
    <td>Acceso a datos Type-safe y migraciones automatizadas.</td>
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
<pre>
estacionar-monorepo/
├── 📂 frontend/        # React Native (Expo, Zustand)
├── 📂 backend/         # Express (Prisma, Clean Architecture)
├── package.json        # Configuración del Workspaces
└── turbo.json          # Configuración de pipeline
</pre>

<h2>🛡️ Estándares de Calidad y Seguridad</h2>
<ul>
  <li><b>Validación:</b> Implementación estricta de esquemas con <b>Zod</b> en cada entrada de la API.</li>
  <li><b>Seguridad:</b> Autenticación robusta vía <b>JWT</b> y manejo de sesiones.</li>
  <li><b>Errores:</b> Sistema centralizado mediante la clase <code>AppError</code> para respuestas consistentes.</li>
</ul>

<h2>🚦 Guía de Inicio Rápido</h2>

<h3>1. Clonar e Instalar</h3>
<p>Gracias a la arquitectura monorepo, corremos <code>npm install</code> <b>una sola vez en la raíz</b>. Esto instala las dependencias de <code>frontend</code>, <code>backend</code> y paquetes compartidos automáticamente.</p>
<pre>
git clone https://github.com/agussantinelli/EstacionAR.git
cd EstacionAR
npm install
</pre>

<h3>2. Variables de Env</h3>
<p>Configura tu <code>.env</code> en <code>backend/</code>:</p>
<ul>
  <li><code>DATABASE_URL="postgresql://user:password@localhost:5432/estacion-ar"</code></li>
  <li><code>GOOGLE_MAPS_KEY="your_key"</code></li>
  <li><code>MERCADOPAGO_TOKEN="your_token"</code></li>
</ul>

<h3>3. Ejecutar en Desarrollo</h3>
<pre>
# Levanta todo el ecosistema (Mobile & API)
npx turbo run dev
</pre>

<hr>

<p align="center">
  <i>"Liderando la transformación digital de la movilidad en Argentina."</i>
</p>
