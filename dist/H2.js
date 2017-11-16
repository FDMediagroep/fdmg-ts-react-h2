"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * H2 compononent renders a heading
 */
var H2 = /** @class */ (function (_super) {
    __extends(H2, _super);
    function H2(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        console.info('H2 component', props);
        return _this;
    }
    H2.prototype.componentDidMount = function () {
        console.info('H2 mounted');
    };
    H2.prototype.componentWillUnmount = function () {
        console.info('H2 will unmount');
    };
    H2.prototype.componentWillReceiveProps = function (nextProps) {
        console.info('H2 next props', nextProps);
    };
    H2.prototype.render = function () {
        return (React.createElement("h2", { className: this.props.className }, this.props.text));
    };
    return H2;
}(React.Component));
exports.default = H2;
