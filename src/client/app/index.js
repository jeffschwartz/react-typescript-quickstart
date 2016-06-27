"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react"); // <== use for node module.exports =
var react_dom_1 = require("react-dom"); // <== use for node exports[property name] =
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return React.createElement("p", null, "ReactJS Quickstart using NPM, TypeScript and Webpack");
    };
    return App;
}(React.Component));
exports.App = App;
react_dom_1.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map