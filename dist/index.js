'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function ownEnumerableKeys(obj) {
	var keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter(function (key) {
		return propIsEnumerable.call(obj, key);
	});
}

var objectAssign = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = ownEnumerableKeys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }



var _objectAssign2 = _interopRequireDefault(objectAssign);

var truthy = function truthy(x) {
  return x;
};

exports['default'] = function (input) {
  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

  var _ref2 = _slicedToArray(_ref, 2);

  var theme = _ref2[0];
  var classNameDecorator = _ref2[1];

  return function (key) {
    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      names[_key - 1] = arguments[_key];
    }

    var styles = names.map(function (name) {
      return theme[name];
    }).filter(truthy);

    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
  };
};

module.exports = exports['default'];
});

var themeable = unwrapExports(dist);

var defaultTheme = {
  reel: 'react-reel__reel',
  group: 'react-reel__group',
  number: 'react-reel__number'
};

/**
 * @class Numbers
 * @private
 */

var Numbers =
/*#__PURE__*/
function (_PureComponent) {
  inherits(Numbers, _PureComponent);

  function Numbers(props) {
    var _this;

    classCallCheck(this, Numbers);

    _this = possibleConstructorReturn(this, getPrototypeOf(Numbers).call(this, props));
    _this.hasLoaded = false;
    return _this;
  }

  createClass(Numbers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.hasLoaded = true;
      this.timeout = setTimeout(function () {
        _this2.forceUpdate();
      }, 20);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          delay = _this$props.delay,
          values = _this$props.values,
          number = _this$props.number,
          height = _this$props.height,
          duration = _this$props.duration,
          theme = _this$props.theme;
      var display = this.hasLoaded ? number * height : height;
      var style = {
        transitionDuration: "".concat(duration, "ms"),
        transitionDelay: "".concat(delay, "ms"),
        transform: "translate(0, ".concat(display, "em)")
      };
      return React__default.createElement("div", _extends_1({}, theme(2, "group"), {
        style: style
      }), values.map(function (v) {
        return React__default.createElement("div", _extends_1({
          key: v
        }, theme(v, "number")), v);
      }));
    }
  }]);

  return Numbers;
}(React.PureComponent);
/**
 * @class Reels
 */


defineProperty(Numbers, "propTypes", {
  /** @type {number} [0] delay - animation delay */
  delay: PropTypes.number,

  /** @type {Array} [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] values */
  values: PropTypes.array,

  /** @type {number} [0] number - number to move to */
  number: PropTypes.number,

  /** @type {number} [1000] duration - animation duration in milliseconds */
  duration: PropTypes.number,

  /** @type {object} theme - react-themeable */
  theme: PropTypes.func
});

defineProperty(Numbers, "defaultProps", {
  values: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  number: 0,
  delay: 0,
  duration: 700,
  height: 1
});

var Reels =
/*#__PURE__*/
function (_PureComponent2) {
  inherits(Reels, _PureComponent2);

  createClass(Reels, null, [{
    key: "getNumbers",
    value: function getNumbers(number) {
      return number.toString().split("").map(function (n) {
        return parseInt(n, 10);
      });
    }
  }]);

  function Reels(props) {
    var _this3;

    classCallCheck(this, Reels);

    _this3 = possibleConstructorReturn(this, getPrototypeOf(Reels).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this3)), "renderReels", function (parts, theme, height) {
      var ind = 0;
      var strInd = 0;
      var duration = _this3.props.duration;
      var values = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
      return parts.map(function (_ref, partIndex) {
        var type = _ref.type,
            value = _ref.value;

        switch (type) {
          case Reels.TYPE_INT:
          case Reels.TYPE_FRACTION:
            // both integers and fractions contain numbers we want to spin
            return React__default.createElement(React__default.Fragment, {
              key: type + partIndex
            }, Reels.getNumbers(value).map(function (number) {
              var output = React__default.createElement(Numbers, {
                theme: theme,
                duration: duration,
                key: type + ind,
                delay: _this3.delay(ind),
                number: number,
                values: values,
                height: height
              });
              ind++;
              return output;
            }));
          // for any other segment we want a static reel with one value in it's array

          default:
            var output = React__default.createElement(Numbers, {
              theme: theme,
              key: type + strInd,
              values: [value]
            });
            strInd++;
            return output;
        }
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this3)), "getParts", function (text) {
      var parts = [];
      var lastType = null;

      for (var i = 0; i < text.length; i++) {
        var isInt = !isNaN(parseInt(text[i], 10));
        var type = isInt ? Reels.TYPE_INT : Reels.TYPE_STRING;
        var isSame = lastType === Reels.TYPE_INT && isInt || lastType === Reels.TYPE_STRING && !isInt;

        if (isSame) {
          parts[parts.length - 1].value += text[i];
        } else {
          parts.push({
            type: type,
            value: text[i]
          });
        }

        lastType = type;
      }

      return parts;
    });

    _this3.state = {
      text: ""
    };
    return _this3;
  }
  /**
   * This method updates the state with the delay array which identifies which numbers have changes in what index
   * @param nextProps
   * @param prevState
   * @return {*}
   */


  createClass(Reels, [{
    key: "delay",

    /**
     * This method returns the desired animation delay at the given integer index
     * @param {number} index - Int index of the formatted number, e.g. £111,211 number 2 would be index of 4
     * @return {number}
     */
    value: function delay(index) {
      var delayArray = this.state.delayArray;
      var delay = this.props.delay;

      if (!delayArray) {
        return 0;
      }

      var indexDelay = delayArray.indexOf(index);
      return (indexDelay > -1 ? indexDelay + 1 : 0) * delay;
    }
    /**
     * This method handles the render cycle of each reel
     * @param parts
     * @param theme
     * @param height
     * @return {*}
     */

  }, {
    key: "render",
    value: function render() {
      var theme = themeable(this.props.theme);
      var parts = this.getParts(this.props.text);
      var height = this.props.height || 1;
      return React__default.createElement("div", _extends_1({
        "aria-label": this.props.text
      }, theme(0, "container")), React__default.createElement("div", _extends_1({
        role: "presentation"
      }, theme(1, "reel")), this.renderReels(parts, theme, height)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var strippedPrev = +Reels.stripNonNumbers(prevState.text);
      var strippedNext = +Reels.stripNonNumbers(nextProps.text);

      if (strippedPrev === strippedNext) {
        return null;
      }

      var prevNum = Reels.getNumbers(strippedPrev);
      var nextNum = Reels.getNumbers(strippedNext);
      var delayArray = [];

      for (var i = 0; i < nextNum.length; i++) {
        if (nextNum[i] !== prevNum[i]) {
          delayArray.push(i);
        }
      }

      return {
        text: nextProps.text,
        delayArray: delayArray
      };
    }
  }]);

  return Reels;
}(React.PureComponent);

defineProperty(Reels, "TYPE_STRING", "string");

defineProperty(Reels, "TYPE_INT", "integer");

defineProperty(Reels, "TYPE_FRACTION", "fraction");

defineProperty(Reels, "stripNonNumbers", function (str) {
  return str && (str.match(/\d/g) || []).join("");
});

defineProperty(Reels, "propTypes", {
  /** @type {string} text */
  text: PropTypes.string.isRequired,

  /** @type {number} [1000] duration - animation duration in milliseconds */
  duration: PropTypes.number,

  /** @type {number} DELAY - delay between each sibling animation */
  delay: PropTypes.number,

  /** @type {{reel: string, group: string, number: string}} theme - react-themeable */
  theme: PropTypes.any,

  /** @type {number} - translate Y axis by reel value × height */
  height: PropTypes.number
});

defineProperty(Reels, "defaultProps", {
  duration: 700,
  delay: 85,
  theme: defaultTheme
});

module.exports = Reels;
