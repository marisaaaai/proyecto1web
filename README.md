# proyecto1web
### Por: Marisa Montoya 19169
<a name="readme-top"></a>
<details>
  <summary>Table of Contents</summary>
    <li>
      <a href="#acerca-del-proyecto">Acerca del proyecto</a></li>
        <li><a href="#herramientas-utilizadas">Herramientas Utilizadas</a></li>
        <li><a href="#instalacion">Installation</a></li>
  <li><a href="#estructura">Estructura del Proyecto</a></li>
  <li><a href="#contact">Contacto</a></li>

</details>

## Acerca del proyecto

El proyecto consiste en la implementación del lenguaje de React y JavaScript para poder replicar una página web ya existente.

Página web elegida a replicar: https://shopuk.thekillersmusic.com/*/Merch/Desert-Sun-Sand-Hoodie/7MG01TSL000

Pagina web resultado: https://proyecto1web-ac595.web.app


Para la implementación también se añade la herramienta de Webpack y Babel para la compatibilidad con diferentes versiones de navegadores, en específico: 
* "chrome": "80",
* "ie": "11"


Y para una creación de bundles de archivos para una eficiente almacenamiento. En este caso se utilizará la herramienta de Fire base para almacenarlo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Herramientas utilizadas
* React
* Bootstrap
* Javascript

## Instalacion
<ol>
  <li> Clonar el repositorio </li>
  <li> Dirigirse al directorio del repo </li>
  <li> Instalar las dependencias necesarias con <p> npm install </p></li>
  <li> Correer <p> npm run start </p></li>
 </ol>
 
 ## Estructura
 En la estructura del proyecto nos encontramos al inicio con las configuraciones del package.json y las de web pack y babel. Seguidas con las carpetas siguientes:
 
 <ul>
  <li><b>dist-wp</b> : en donde encontramos el output de correr webpack y lo que se sube al servidor dde firebase para tener un hosting de nuestra pagina. Con el bundle de los archivos css, json y html.</li>
  <li> <b>src</b> : en donde encontramos el codigo fuente y los componentes de nuestro proyecto. </li>
    <ul>
      <li> index.js donde renderizamos la applicacion </li>
      <li> index.html </li>
      <li> backgroung.jpg la cual sera la imagen que utilizaremos como fondo en nuestra pagina web</li>
      <li> app en donde se encuentran los componentes  </li>
        <ul>
          <li> app.js en donde se llaman los componentes de footer y contenido de la pagina web </li>
          <li> app.css en donde estilizamos una parte de la pagina web que se codifica desde el app.js </li>
          <li> footer </li>
          <ul> 
            <li> footer.js en donde se codifica el elemento del footer</li>
            <li> footer.css en donde se estiliza el elemento del footer </li>
          </ul>
          <li> contenido </li>
          <ul>
            <li> contenido.js </li>
            <li> contenido.css </li>
          </ul>
        </ul>
  </ul>
 </ul>
  
 
 ## Contact

Marisa Montoya - mon19169@uvg.edu.gt

Project Link: [https://github.com/marisaaaai/proyecto1web](https://github.com/marisaaaai/proyecto1web)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
