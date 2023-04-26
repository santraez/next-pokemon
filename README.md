yarn create next-app
yarn dev

http://localhost:3000

SSR: Server-side rendering            -> hay cambios contantes, servidor renderiza pagina con datos consultados (clasico web)
SSG: Static-site generation (default) -> ya se conoce el resultado, se crean todas las paginas en el build (estaticos)
ISR: Incremental static regeneration  -> vuelve a generar el build estatico cada cierto tiempo, comprueba cambios

CSR: Client-side rendering            -> 
   : Dynamic routing                  -> 
ISG: Incremental static generation    -> se genera un estatico despues del build, cuando se solicita

getStaticPaths      -> almacena los estaticos para ser consumidos rapido
getStaticProps      -> almacena en JSON propiedades de un statico
getServerSideProps  -> hace peticiones antes que el usuario lo solicite

yarn add sass

next.config.js - sass

const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

next.config.js - images src

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
}
