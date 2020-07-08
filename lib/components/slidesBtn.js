"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _presentation = _interopRequireDefault(require("../assets/presentation.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SlidesButton = function SlidesButton(props) {
  var src = props.src,
      presentSlides = props.presentSlides,
      btnClassName = props.btnClassName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: btnClassName
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "editorjs-compo-slides-btn-0933",
    src: src || _presentation["default"],
    onClick: presentSlides
  }));
};

var _default = SlidesButton;
exports["default"] = _default;