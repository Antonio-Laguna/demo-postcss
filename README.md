# Demo PostCSS

Este proyecto de ejemplo demuestra cómo podemos usar [PostCSS](https://postcss.org/) para compilar CSS que es parecido a Sass a CSS que pueda entender el navegador.

Clona el proyecto y ejecuta `npm i` para instalar todas las dependencias que se instalarán de forma local.

Puedes encontrar los ficheros CSS usados en el directorio `src/css`. El fichero `index.css` se encarga de importar el resto.

Características presentes:

* Importar diferentes ficheros, incluido un paquete de NPM.
* Mixins (se pueden ver en `src/css/mixins.css`).
* Anidación de CSS *a la* Sass.
* Preset Env usando:
  * Selectores personalizados.
  * Media queries personalizadas.
  * Variables.
  * Autoprefixer.
* Sourcemaps en desarrollo.
* CSSNano para compilación.

## Scripts disponibles

```shell
$ npm run css:dev
```

Compila el CSS en modo desarrollo, sin comprimir y con sourcemaps.

```shell
$ npm run css:watch
```

Compila el CSS en modo desarrollo y si cambia algún fichero CSS, volverá a compilar.

```shell
$ npm run css:build
```

Compila el CSS en modo producción con el código comprimido y sin sourcemaps.

---

Proyecto que acompaña a este artículo de mi blog: [Migrando de Sass a PostCSS](https://antonio.laguna.es/migrando-sass-a-postcss?utm_source=GitHub&utm_campaign=Demo).
