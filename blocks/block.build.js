/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Input_React__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Select_React__ = __webpack_require__(2);



var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

var el = wp.element.createElement;

registerBlockType('blocks/guten-bacon', {
    title: __('Bacon Ispum Generator', 'learn-gutenberg'),
    category: 'widgets',
    supportHTML: false,
    attributes: {
        type: {
            selector: 'div#bacon-wrapper',
            attribute: 'type',
            default: 'meat-and-filler'
        },
        paras: {
            selector: 'div#bacon-wrapper',
            attribute: 'paras',
            default: '2'
        },
        start_with: {
            selector: 'div#bacon-wrapper',
            attribute: 'start-with',
            default: 'false'
        },
        content: {
            selector: 'div#bacon-wrapper p',
            default: '<p>Select Options</p>'
        }
    },
    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            className = _ref.className,
            focus = _ref.focus,
            id = _ref.id;


        var getBacon = function getBacon() {
            var url = 'https://baconipsum.com/api/?type=' + attributes.type + '&paras=' + attributes.paras;
            console.log(attributes);
            if ('false' !== attributes.start_with) {
                url += '&start-with-lorem=1';
            }
            jQuery.get(url).done(function (res) {
                setAttributes({ content: res });
            });
        };

        var changeHandler = function changeHandler(event) {
            var newAttr = {};
            newAttr[event.target.id] = event.target.value;
            setAttributes(newAttr);
            getBacon();
        };

        var typeOptions = [{
            value: 'meat-and-filler',
            label: 'Meat & Filler'
        }, {
            value: 'all-meat',
            label: 'All Meat'
        }];

        var startWithOptions = [{
            value: 'true',
            label: 'Yes'
        }, {
            value: 'false',
            label: 'No'
        }];

        return wp.element.createElement(
            'div',
            { id: id },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Select_React__["a" /* default */], {
                id: 'start_with',
                changeCallback: changeHandler,
                value: attributes.start_with,
                options: startWithOptions,
                label: 'Start With Bacon Ipsum...?'
            }),
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Select_React__["a" /* default */], {
                id: 'type',
                changeCallback: changeHandler,
                value: attributes.type,
                options: typeOptions,
                label: 'Type of Filler'
            }),
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Input_React__["a" /* default */], {
                id: 'paras',
                type: 'number',
                value: attributes.paras,
                label: 'Number of Paragraphs',
                onChange: changeHandler
            })
        );
    },


    save: function save(_ref2) {
        var attributes = _ref2.attributes;

        return wp.element.createElement(
            'div',
            { type: attributes.type, paras: attributes.paras, 'start-with': attributes.start_with, className: attributes.className, id: 'bacon-wrapper' },
            attributes.content.map(function (item, index) {
                return wp.element.createElement(
                    'p',
                    { key: index },
                    item
                );
            })
        );
    }
});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var Component = wp.element.Component;

var el = wp.element.createElement;

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select(props) {
        var _ref;

        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(_toConsumableArray(props))));
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {
            return wp.element.createElement(
                'div',
                { className: 'bacon-field-wrapper' },
                wp.element.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    __(this.props.label + '?', 'text-domain')
                ),
                wp.element.createElement(
                    'select',
                    { onChange: this.props.changeCallback, value: this.props.value, id: this.props.id },
                    this.props.options.map(function (item, index) {
                        return wp.element.createElement(
                            'option',
                            { key: index, value: item.value },
                            item.label
                        );
                    })
                )
            );
        }
    }]);

    return Select;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var Component = wp.element.Component;

var el = wp.element.createElement;

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            return wp.element.createElement(
                'div',
                { className: 'bacon-field-wrapper' },
                wp.element.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    __(this.props.label + '?', 'text-domain')
                ),
                wp.element.createElement('input', { id: this.props.id, type: this.props.type, onChange: this.props.onChange, value: this.props.value, label: this.props.label })
            );
        }
    }]);

    return Input;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ })
/******/ ]);