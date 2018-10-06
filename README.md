# SCAFFOLDING PARA REACT

![React Logo](docs/Logo.png)

Repositorio con un Scaffolding para desplegar un servidor de prueba, creando un entorno de desarrollo de aplicaciones en React, ademas de tambien poder simular un entorno de produccion.

## Caracteristicas

### Scripts

### Concurrently

Se usa el modulo de `concurrently` para el uso de comandos en paralelo, se debe de instalar globalmente para el uso de la interfaz de línea de comandos de la propia libreria **CLI** (**command-line** interface)

```
npm install -g concurrently
```

Se tiene un archivo de configuracion para el uso de este modulo `concurrently.js` el cual tiene una configuracion sencilla.

se cuenta con una constante `conmmands` que es un array que contiene todos los posibles comandos que se puedan usar en el proyecto, se pueden agregar mas comandos para su futuro uso, es importante mencionar que se deben poner como se pondrian en la seccion de `package.json`.

#### PACKAGE.JSON

```json
  {
      "scripts": {
          "comando-1": "node script_01.js",
          "comando-2": "node script_02.js",
          "comando-3": "node script_02.js",
          "paquete-1": "cli_paquete_1 archivo_de_configuracion_script.js",
          "paquete-2": "cli_paquete_2 archivo_de_configuracion_script.js",
      },
  }
```

CONCURRENTLY.JS

```javascript
    // 0
    {
      command: 'node script_01.js',
      name: 'comando-1',
      prefixColor:'green'
    },
    // 1
    {
      command: 'node script_02.js',
      name: 'comando-2',
      prefixColor:'green'
    },
    // 2
    {
      command: 'node script_03.js',
      name: 'comando-3',
      prefixColor:'green'
    },
    // 2
    {
      command: 'cli_paquete_1 archivo_de_configuracion_script.js',
      name: 'paquete-1',
      prefixColor:'green'
    },
    // 3
    {
      command: 'cli_paquete_1 archivo_de_configuracion_script.js',
      name: 'paquete-1',
      prefixColor:'green'
    }, 
```

### Servidor

### Webpack


## To do List

- [x] Agregar un servidor de prueba con `json-server`
  - [X] Archivo `.json` de configuración para desplegar un servidor sencillo
  - [ ] Archivo `.js` de configuración para desplegar un servidor mas robusto para el uso de middelwares y algunas caracteristicas como JWT, o encryptamiento de caracteres.
- [x] Agregar archivo de configuración para concurrently
- [x] Agregar dos archivos de configuración para webpack
  - [x] Webpack entorno de produccion
  - [x] Webpack entorno de desarrollo

## Documentación

1. [CHANGELOG](docs/CHANGELOG.md)
2. [HISTORY](docs/HISTORY.md)
3. [LICENCE](docs/LICENCE.md)