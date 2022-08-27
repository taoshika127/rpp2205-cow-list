function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import ReactDOM from 'react-dom';
import React from 'react';
import Cow from './cow.jsx';

var Cowlist = /*#__PURE__*/function (_React$Component) {
  _inherits(Cowlist, _React$Component);

  var _super = _createSuper(Cowlist);

  function Cowlist(props) {
    _classCallCheck(this, Cowlist);

    return _super.call(this, props);
  }

  _createClass(Cowlist, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/React.createElement("div", null, this.props.data.map(function (cow, index) {
        return /*#__PURE__*/React.createElement("h4", {
          key: index,
          onClick: _this.props.cowClicked
        }, cow.name);
      }));
    }
  }]);

  return Cowlist;
}(React.Component);

export default Cowlist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdERPTSIsIlJlYWN0IiwiQ293IiwiQ293bGlzdCIsInByb3BzIiwiZGF0YSIsIm1hcCIsImNvdyIsImluZGV4IiwiY293Q2xpY2tlZCIsIm5hbWUiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jb3dsaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ293IGZyb20gJy4vY293LmpzeCc7XG5cbmNsYXNzIENvd2xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcCgoY293LCBpbmRleCkgPT4gKDxoNCBrZXk9e2luZGV4fSBvbkNsaWNrPXt0aGlzLnByb3BzLmNvd0NsaWNrZWR9Pntjb3cubmFtZX08L2g0PikpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvd2xpc3Q7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFdBQWhCOztJQUVNQyxPOzs7OztFQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUEseUJBQ1hBLEtBRFc7RUFFbEI7Ozs7V0FFRCxrQkFBUztNQUFBOztNQUNQLG9CQUNFLGlDQUNHLEtBQUtBLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO1FBQUEsb0JBQWlCO1VBQUksR0FBRyxFQUFFQSxLQUFUO1VBQWdCLE9BQU8sRUFBRSxLQUFJLENBQUNKLEtBQUwsQ0FBV0s7UUFBcEMsR0FBaURGLEdBQUcsQ0FBQ0csSUFBckQsQ0FBakI7TUFBQSxDQUFwQixDQURILENBREY7SUFLRDs7OztFQVhtQlQsS0FBSyxDQUFDVSxTOztBQWM1QixlQUFlUixPQUFmIn0=