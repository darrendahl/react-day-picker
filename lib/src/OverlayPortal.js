'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalRoot = document.getElementById('react-datepicker-portal');

if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'react-datepicker-portal');
  document.body.appendChild(modalRoot);
}

var OverlayPortal = function (_Component) {
  _inherits(OverlayPortal, _Component);

  function OverlayPortal(props) {
    _classCallCheck(this, OverlayPortal);

    var _this = _possibleConstructorReturn(this, (OverlayPortal.__proto__ || Object.getPrototypeOf(OverlayPortal)).call(this, props));

    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(OverlayPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      modalRoot.appendChild(this.el);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _reactDom.createPortal)(this.props.children, this.el);
    }
  }]);

  return OverlayPortal;
}(_react.Component);

exports.default = OverlayPortal;
//# sourceMappingURL=OverlayPortal.js.map