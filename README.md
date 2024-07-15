Facilidades de NextJs:

- Facilidades de prerendering

Se construye en el cliente la parte del cliente para funcionar. Pero con nextjs se esta renderizando previamente en el servidor para funcionar. NextJs hace un server side rendering
Esto hace que tu codigo funciona tanto en cliente como servidor.

Export de staticos como hace gatsby. Te compila la aplicación
bash

'node -v'

'npm -v'

'yarn -v'

'npx create-next-app' -> Comando de npm, pero la x es porque lo va a ejecutar

Aca nos crea nuestra aplicación directamente con package-json en vez de yarn.

La estructura de carpetas es:
readme
node_modules -> instalacion de las dependencias
pages ->Nuestras páginas de la app
public
styles
package.json
package-lock.json

si hago un npm run nos dice los scripts de nuestra aplicación:

'npm run-dev' -> Modo desarrollo

'npm run-start' -> Inicializar nuestra aplicación

'npm run-build' -> Crea los estaticos para desplegar nuestra aplicación

en pages/api nos crea una carpeta api. Aca se pueden crear rutas para api. Un endpoint.
en pages/index.js -> Aca tenemos es index de nuestra app. Aca esta todo el contenido de la aplicación. El indice de nuestra app.
en public -> Son recursos publicos. Aca subimos nuestros estaticos, svgs, png, jpg, imagenes
en package.json -> Lo que nos ha creado y dependencias que necesitamos: react, react-dom porque son el core de next.js y nextjs.
readme

Inicializamos nuestro proyecto con 'npm run dev' para que se habilite en localhost, en puerto 3000. Automaticamente nos crea una carpeta .next que lo que hace es un build/bundle, contruye todos los estaticos del cliente y servidor. Tiene una cache que nos sirve es que cuando hagamos un cambio, se muestra ipsofacto

---

firebase.google.com

Libreria de utilidades, backend as a service



---

npx prettier . --check

npx prettier . -write -> arreglar los errores que detecte prettier

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
