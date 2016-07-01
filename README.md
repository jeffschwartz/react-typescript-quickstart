# A React/TypeScript Quickstart

Supports project development using React, NPM, TypeScript, TSLint and Webpack.

## CLI

* ***npm install*** to install project dependencies including typings.
* ***npm start*** to launch the application in the default browser. Behind the scenes this runs tsc, webpack and lite-server.
* ***npm run typings*** to install typings files.
* ***npm run lite*** to run lite-server.
* ***npm run lint*** to run TSLint.
* ***npm run tsc*** to run the TypeScript compiler.
* ***npm run tsc:w*** to run the TypeScript compiler in watch mode.
* ***npm run webpack*** to run Webpack.
* ***npm run webpack:w*** to run Webpack in watch mode.

## Project Runtime Dependencies
```json
  "dependencies": {
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.5.0",
    "react": "^15.1.0",
    "react-dom": "^15.1.0",
    "webpack": "^1.13.1"
  }
```

## Project Development Dependencies
```json
  "devDependencies": {
    "concurrently": "^2.1.0",
    "lite-server": "^2.2.2",
    "tslint": "^3.13.0",
    "typescript": "^1.8.10",
    "typings": "^1.3.0"
  }
```

## Notes
* This project originally supported `eslint`ing but at this time TypeScript support isn't quite there yet. While there is a [TypeScript eslint parser in development](https://github.com/eslint/typescript-eslint-parser) it currently is still in alpha. When this parser is further along in its development, support for `eslint`ing might be added back into this project.
* If you look inside `package.json` and `webpack.config.js` you will notice that there are dependencies for Babel. As installed this project doesn't use Babel (because it is using TypeScript there is no further need to transpile as the typescript compiler does that) but your application might need Babel if you use a JavaScript feature that isn't currently supported by TypeScript. You are free to remove the Babel dependencies if you don't need them as it will not break anything.

## LICENSE
MIT