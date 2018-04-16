
# PollApp
A MEAN social polling app styled with Bootstrap and Bootswatch, featuring Chart.js.

## Setting up Project and Dependencies
1.  Clone this repository on your local machine
    `git clone https://github.com/ElizabethKendall/PollApp`

### Install npm packages
1.  Before proceeding, have Angular CLI tools installed globally or locally. Currently the package name is `@angular/cli`, and it can be installed with the command `npm install @angular/cli`. 
2.  MogoDb must also be locally installed before proceeding. Please see the [MongoDB documentation](https://docs.mongodb.com/manual/administration/install-community/ "MongoDB documentation") for instructions.
2.  Install the backend's required packages by navigating to the root directory, **"PollApp"**, and running the command: `npm install`.
3.  Install the frontend's required packages by navigating to the client directory, **"PollApp/client"**, and running the command: `npm install`.

## Running the Project
1.  MongoDB must be started and connected to. Please see the instructions for your starting and connecting to MongoDB on your operating system following installation instructions in the [MongoDB documentation](https://docs.mongodb.com/manual/administration/install-community/ "MongoDB Documentation").
1.  Navigate from the root directory into **"PollApp/client/"** and run the command `ng build` (note you must already have Angular CLI tools installed globally or locally to run this command). 
2.  Once the build is complete, navigate back to the root directory, **"PollApp"**, with the command `..`. Run the command `ts-node server.js` (or, if you have nodemon globally installed on your machine, run `nodemon server.js`). If everything is successful a listening message should be displayed in the console.
3.  Try out the project at: http://localhost:8000

## Architecture
- A MEAN application implemented with an MVC architecture, and scaffolded with Angular CLI.

# Auto-Generated Angular CLI documentation

## Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
