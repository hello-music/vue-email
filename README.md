# Vue-Email

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)


[Live demo](https://this-is-demo-only.firebaseapp.com)

* Add query string "**?demo=success**" to simulate success email send: [success demo](https://this-is-demo-only.firebaseapp.com?demo=success)
* Add query string "**?demo=error**" to simulate success email send: [error demo](https://this-is-demo-only.firebaseapp.com?demo=error)
* Add query string "**?demo=timeout**" to simulate slow server response (Promise.race to manage slow server response): [timeout demo](https://this-is-demo-only.firebaseapp.com?demo=timeout)

Highlights:

1.  Vue-cli + Vue.js + Vuex + Vue-router + SCSS
2.  Real UX - Keyboard works: tab/enter/delete when adding an email(try it out)

### Directory Layout

```shell
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Public assets
├── /src/                       # Development work
│   ├── /assets/                # project assessible assets
│   ├── /helpers/               # project assessible assets
│   │   ├── /ajax.js            # generic ajax call interface
│   │   ├── /helper.js          # general reusable util functions
│   ├── /router/                # define routes
│   ├── /services/              # api services
│   ├── /ui/                    # UI components
│   │   ├── /components/        # Reusable components
│   │   ├── /pages/             # Page specific components
│   ├── /vuex/                  # vuex data store
│   ├── /App.vue                # application root component
│   ├── /main.js                # mount app, entry point
├── .prettierrc                 # Utility and helper classes
│── README.md                   # This file that you are reading
│── package.json                # The list of project dependencies and NPM
```

## Stack

### Framework

* Vue.js
* Vuex
* Vue-router

### 3rd Party Libs

* vue-input-autowidth - **auto resize input directive**
* basscss - **light weight low level css lib**

#### Bundling/Server

* Webpack
* Webpack-server
* Hot modules replacement

### Code Quality Control

* Eslint
* Prettier
* Eslint-plugin-prettier

### Installation

This app requires [Node.js](https://nodejs.org/) v6+ to run.

Clone or download this project.

```sh
$ cd vue-email
$ npm install
$ npm run serve
```

Go to browser: localhost:8080

### Todos

* Look & Feel and UX improvements, esp for mobile
* Unit tests
* Code refactor
* Component reusabilities

## License

MIT
