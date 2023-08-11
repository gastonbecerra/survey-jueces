# Formulario para Interjueces

Esta script permite  implementar una herramienta para validar instrumentos de investigación, a través de la técnica del juicio entre expertos. La herramienta está desarrollada en Angular (TypeScript).

Los datos de la escala que se deben proporcionar son 3: información de la encuesta (objetivo y contacto del equipo), dimensiones de los items, listado de items. Todo esto se incluye en un archivo de configuración en `src/assets/survey.json`


Los datos se guardan en Firebase. Para configurarlo hay que copiar las claves en `firebase.config.ts` (en el raíz)


    import { initializeApp } from "firebase/app";

    export const firebaseConfig = {
        apiKey: "xxxxxxxxxxxxxxx",
        authDomain: "xxxxxxxxxxxxxxx",
        projectId: "xxxxxxxxxxxxxxx",
        storageBucket: "xxxxxxxxxxxxxxx",
        messagingSenderId: "xxxxxxxxxxxxxxx",
        appId: "xxxxxxxxxxxxxxx"
    };

    initializeApp(firebaseConfig);

## Comandos de Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Demo

[Escala de actitudes hacia el big data y la datificación](https://survey-jueces.web.app/)


## Related

Algunos proyectos parecidos

[Validez de contenido por juicio de expertos: propuesta de una herramienta virtual](https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-61802017000300042)

