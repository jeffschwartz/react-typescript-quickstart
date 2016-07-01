import React = require("react"); // <== use for node module.exports =
import {render} from "react-dom"; // <== use for node exports[property name] =

export class App extends React.Component<void, void> {
    render () {
        return <p>ReactJS Quickstart using NPM, TypeScript, TSLint and Webpack</p>;
    }
}

render(<App/>, document.getElementById("app"));
