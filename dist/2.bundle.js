(window["webpackJsonpWebBuilder"] = window["webpackJsonpWebBuilder"] || []).push([[2],{

/***/ "./src/demos/NewApp/Components/createElement.tsx":
/*!*******************************************************!*\
  !*** ./src/demos/NewApp/Components/createElement.tsx ***!
  \*******************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unstated-x */ "./node_modules/unstated-x/lib/unstated.es.js");
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/stores */ "./src/demos/NewApp/stores/stores.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createElement(Element, container) {
  return class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "handleClick", () => {
        _stores_stores__WEBPACK_IMPORTED_MODULE_2__["selected"].setState({
          selected: container
        });
      });

      _defineProperty(this, "handleDragStart", e => {
        console.log('start drag item...');
        console.log('event', e.target.id);
        e.dataTransfer.setData('element', e.target.id);
      });

      _defineProperty(this, "handleDrop", e => {
        e.preventDefault();
        e.stopPropagation();
        console.log('drop here!');
        const data = e.dataTransfer.getData('element');
        console.log('data...', document.querySelector('iframe').contentDocument.getElementById(data));
        const El = document.querySelector('iframe').contentDocument.getElementById(data);
        e.target.appendChild(El); // const droppable = e.target.closest('[data-droppable]')
        // if (droppable)
        // 	droppable.appendChild(document.getElementById(data))
      });

      _defineProperty(this, "handleDragOver", e => {
        e.preventDefault();
        console.log('start drag over...');
      });
    }

    componentDidMount() {// console.log('i am from log something function')
      // console.log('props', this.props)
    }

    inspector() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "abc");
    }

    render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](unstated_x__WEBPACK_IMPORTED_MODULE_1__["Subscribe"], {
        to: [container]
      }, data => {
        // console.log('data...', data)
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Element, {
          data: data,
          onClick: this.handleClick,
          inspector: this.inspector,
          draggable: true,
          otherProps: {
            onDragStart: this.handleDragStart,
            onDrop: this.handleDrop,
            onDragOver: this.handleDragOver
          }
        });
      });
    }

  };
}

/***/ }),

/***/ "./src/demos/NewApp/Elements/E3/E3.tsx":
/*!*********************************************!*\
  !*** ./src/demos/NewApp/Elements/E3/E3.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/createElement */ "./src/demos/NewApp/Components/createElement.tsx");
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/stores */ "./src/demos/NewApp/stores/stores.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class E3Container extends _stores_stores__WEBPACK_IMPORTED_MODULE_2__["ElementContainer"] {
  static a() {
    console.log('aaaaabbbcc');
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "i am aaaaaaa"));
  }

}

class E3 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    // console.log('props', this.props)
    // console.log('inspector...', ElementContainer.inspector())
    // console.log('inspector...', ElementContainer.a())
    const data = this.props.data;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", _extends({
      type: "button",
      className: `btn btn-${data.state.data.text}`,
      onClick: this.props.onClick,
      draggable: this.props.draggable
    }, this.props.otherProps, {
      id: 'E3'
    }), "Button");
  }

} // export default createElement(E3, new ElementContainer({type: 'E3', children: [], data: {text: 'primary'}}))


/* harmony default export */ __webpack_exports__["default"] = (Object(_Components_createElement__WEBPACK_IMPORTED_MODULE_1__["createElement"])(E3, new E3Container({
  type: 'E3',
  children: [],
  data: {
    text: 'primary'
  }
})));

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map