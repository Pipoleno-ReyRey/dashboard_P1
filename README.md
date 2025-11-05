# DashboardP1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Project structure

Fields structure:

`public/` : Visual elements (images, icons, etc..)

`src/app/`: Components, modules, services, models; app logic

`models/`: Data models, DTOs

`components/`: app individual's components and herarchy structure

   `login/`: Login user components (sign in, reset in, etc..)

   `user-pages/`: profile and user components post login

   `generyc-components/`: generic components used in multiple points (search-inputs, details, etc..)

`services/`: Services used in all app, status, data, http connections