# ReactJS Quickstart using NPM, TypeScript and Webpack
Clone this repo for a ReactJS quickstart project which includes the following:

1. TypeScript (also includes a tsconfig.json file)
2. Webpack
3. NPM

## CLI
from the command line, run ***npm install***

## Run
from the command line, run ***npm start*** to launch the application in the default browser. Behind the scenes this runs tsc, webpack and lite-server.

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
    "eslint": "^2.13.1",
    "eslint-plugin-react": "^5.2.2",
    "lite-server": "^2.2.2",
    "typescript": "^1.8.10",
    "typings": "^1.3.0"
  }
```

## Notes
If you look inside `package.json` you will notice that there are dependencies for Babel. As installed this project doesn't use Babel (because it is using TypeScript there is no further need to transpile as the typescript compiler does that) but your application might need Babel if you use a JavaScript feature that isn't currently supported by TypeScript. You are free to remove the Babel dependencies if you don't need them as it will not break anything.