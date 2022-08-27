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

var Cow = /*#__PURE__*/function (_React$Component) {
  _inherits(Cow, _React$Component);

  var _super = _createSuper(Cow);

  function Cow(props) {
    _classCallCheck(this, Cow);

    return _super.call(this, props);
  }

  _createClass(Cow, [{
    key: "render",
    value: function render() {
      var cowClicked = this.props.clicked;

      if (cowClicked) {
        var targetCow = this.props.data.find(function (cow) {
          return cow.name === cowClicked;
        });
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, targetCow.name), /*#__PURE__*/React.createElement("h5", null, targetCow.description));
      }
    }
  }]);

  return Cow;
}(React.Component);

export default Cow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdERPTSIsIlJlYWN0IiwiQ293IiwicHJvcHMiLCJjb3dDbGlja2VkIiwiY2xpY2tlZCIsInRhcmdldENvdyIsImRhdGEiLCJmaW5kIiwiY293IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQ29tcG9uZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY293LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIENvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNvd0NsaWNrZWQgPSB0aGlzLnByb3BzLmNsaWNrZWQ7XG4gICAgaWYgKGNvd0NsaWNrZWQpIHtcbiAgICAgIHZhciB0YXJnZXRDb3cgPSB0aGlzLnByb3BzLmRhdGEuZmluZChjb3cgPT4gY293Lm5hbWUgPT09IGNvd0NsaWNrZWQpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+e3RhcmdldENvdy5uYW1lfTwvaDM+XG4gICAgICAgICAgPGg1Pnt0YXJnZXRDb3cuZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdzsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjs7SUFFTUMsRzs7Ozs7RUFDSixhQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUEseUJBQ1hBLEtBRFc7RUFFbEI7Ozs7V0FFRCxrQkFBUztNQUNQLElBQUlDLFVBQVUsR0FBRyxLQUFLRCxLQUFMLENBQVdFLE9BQTVCOztNQUNBLElBQUlELFVBQUosRUFBZ0I7UUFDZCxJQUFJRSxTQUFTLEdBQUcsS0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCQyxJQUFoQixDQUFxQixVQUFBQyxHQUFHO1VBQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFKLEtBQWFOLFVBQWpCO1FBQUEsQ0FBeEIsQ0FBaEI7UUFDQSxvQkFDRSw4Q0FDRSxnQ0FBS0UsU0FBUyxDQUFDSSxJQUFmLENBREYsZUFFRSxnQ0FBS0osU0FBUyxDQUFDSyxXQUFmLENBRkYsQ0FERjtNQU1EO0lBQ0Y7Ozs7RUFoQmVWLEtBQUssQ0FBQ1csUzs7QUFtQnhCLGVBQWVWLEdBQWYifQ==