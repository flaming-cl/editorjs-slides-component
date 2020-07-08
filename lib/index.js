"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _slidesBtn = _interopRequireDefault(require("./components/slidesBtn"));

var _slides = _interopRequireDefault(require("./components/slides"));

var _reveal = _interopRequireDefault(require("reveal.js"));

require("reveal.js/dist/theme/black.css");

require("reveal.js/dist/reveal.css");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EditorSlides = function EditorSlides(props) {
  var src = props.src,
      btnClassName = props.btnClassName,
      slidesConfig = props.slidesConfig,
      theme = props.theme;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      slidesData = _useState2[0],
      setSlidesData = _useState2[1];

  var reveal = (0, _react.useRef)();
  var slides = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var slidesNotInitiated = !reveal.current;
    if (slidesNotInitiated) return;
  }, []);

  var presentSlides = function presentSlides() {
    var notInitYet = !slidesData.length;

    if (notInitYet) {
      initSlides();
    }

    fillSlidesData();
    reveal.current.hidden = false;
    enterFullscreen();
  };

  var fillSlidesData = function fillSlidesData() {
    var blocks = document.getElementsByClassName('ce-block');
    var newSlideData = [];

    if (blocks.length) {
      for (var i = 0; i < blocks.length; i++) {
        var singleBlock = blocks[i];
        var hasContent = singleBlock.innerText && singleBlock.innerText.trim();
        if (hasContent) newSlideData.push(singleBlock.innerHTML);
      }
    }

    setSlidesData(newSlideData);
  };

  var initSlides = function initSlides() {
    var revealNode = reveal.current;

    if (revealNode) {
      var deckInstance = new _reveal["default"](revealNode, {
        embedded: true
      });
      initSlidesInstance(deckInstance);
      configSlidesInstance(deckInstance);
    }
  };

  var initSlidesInstance = function initSlidesInstance(ins) {
    ins.initialize({
      slideNumber: false
    });
  };

  var configSlidesInstance = function configSlidesInstance(ins) {
    ins.configure({
      keyboard: {
        70: null,
        // F
        27: removeRevealNode,
        // esc
        13: 'next',
        // enter
        32: null // space

      }
    });
  };

  var removeRevealNode = function removeRevealNode() {
    if (reveal.current) reveal.current.hidden = true;
  };

  var enterFullscreen = function enterFullscreen() {
    var element = reveal.current;

    if (element.hidden !== true) {
      element = element || document.documentElement;
      var requestMethod = element.requestFullscreen || element.webkitRequestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;

      if (requestMethod) {
        requestMethod.apply(element);
      }
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_slides["default"], {
    reveal: reveal,
    slides: slides,
    slidesData: slidesData
  }), /*#__PURE__*/_react["default"].createElement(_slidesBtn["default"], {
    src: src,
    btnClassName: btnClassName,
    presentSlides: presentSlides
  }));
};

var _default = EditorSlides;
exports["default"] = _default;