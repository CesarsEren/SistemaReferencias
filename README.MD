# Inicio de Software ( SISTEMA DE REFERENCIAS => RRHH)

## Estructura de Proyecto NPM

    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "morgan": "^1.10.0",
    "mssql": "^6.3.1",
    "nodemailer": "^6.4.17"

El desarrollo de este Sistema será en Node-TypeScript ,  para el backend , manejando Controllers(Routes) que consuman y pidan Json , pero manejando Sessiones con Express-Session.

BACKEND
- Node-Typescript
- MSSQL

FRONTEND
- Javascript => Manejo de DOM
- Axios => Promesas de Request

Estructura
- src
    - Controllers (DAO Y NEGOCIO)
    - Interface (Models)
    - public (Recursos para el FrontEnd (JS-HTML-CSS))
    - routes (DIRECCIONES DE CONTROLLADORES)
    - views (Páginas (HTML) FrontEnd)

> Carpetas , Todo Desarrollo está en "src"
> Carpeta de Producción es "referencias"


Comandos NPM

> npm run build -> Contrucción para compartir el code de .TS a .JS

> luego de eso copiar la carpeta public y la carpeta views, dentro de la carpeta "referencias"(nombre de el proyecto construido)

> npm run start -> Iniciar el sistema en producción, busca el index.js dentro de la carpeta "referencias"

> npm run dev -> Iniciar el sistema en Modo Desarrollo , esto permite iniciar el sistema en Desarrollo , sin compilar el code .TS a .JS
