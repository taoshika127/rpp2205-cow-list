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
import { Parse } from '../parse.js';

var AddCow = /*#__PURE__*/function (_React$Component) {
  _inherits(AddCow, _React$Component);

  var _super = _createSuper(AddCow);

  function AddCow(props) {
    _classCallCheck(this, AddCow);

    return _super.call(this, props);
  }

  _createClass(AddCow, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      var description = document.getElementById('description').value;
      Parse.create({
        name: name,
        description: description
      }, function () {
        Parse.readAll(function () {});
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        htmlFor: "name"
      }, "Name: "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "name",
        name: "name"
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "description"
      }, "Description: "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "description",
        name: "description"
      }), /*#__PURE__*/React.createElement("button", {
        className: "submit",
        onClick: this.handleSubmit.bind(this)
      }, "Submit"));
    }
  }]);

  return AddCow;
}(React.Component);

export default AddCow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdERPTSIsIlJlYWN0IiwiUGFyc2UiLCJBZGRDb3ciLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZSIsInJlYWRBbGwiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiQ29tcG9uZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWRkQ293LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJzZSB9IGZyb20gJy4uL3BhcnNlLmpzJztcblxuY2xhc3MgQWRkQ293IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBQYXJzZS5jcmVhdGUoeyBuYW1lLCBkZXNjcmlwdGlvbiB9LCAoKSA9PiB7XG4gICAgICBQYXJzZS5yZWFkQWxsKCgpID0+IHt9KVxuICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvdzsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7O0lBRU1DLE07Ozs7O0VBQ0osZ0JBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQSx5QkFDWEEsS0FEVztFQUVsQjs7OztXQUVELHNCQUFhQyxDQUFiLEVBQWdCO01BQ2RBLENBQUMsQ0FBQ0MsY0FBRjtNQUNBLElBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUEzQztNQUNBLElBQUlDLFdBQVcsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQyxLQUF6RDtNQUNBUixLQUFLLENBQUNVLE1BQU4sQ0FBYTtRQUFFTCxJQUFJLEVBQUpBLElBQUY7UUFBUUksV0FBVyxFQUFYQTtNQUFSLENBQWIsRUFBb0MsWUFBTTtRQUN4Q1QsS0FBSyxDQUFDVyxPQUFOLENBQWMsWUFBTSxDQUFFLENBQXRCO01BQ0QsQ0FGRDtJQUlEOzs7V0FFRCxrQkFBUztNQUNQLG9CQUNFLDhDQUNFO1FBQU8sT0FBTyxFQUFDO01BQWYsWUFERixlQUVFO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsRUFBRSxFQUFDLE1BQXRCO1FBQTZCLElBQUksRUFBQztNQUFsQyxFQUZGLGVBR0U7UUFBTyxPQUFPLEVBQUM7TUFBZixtQkFIRixlQUlFO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsRUFBRSxFQUFDLGFBQXRCO1FBQW9DLElBQUksRUFBQztNQUF6QyxFQUpGLGVBS0U7UUFBUSxTQUFTLEVBQUMsUUFBbEI7UUFBMkIsT0FBTyxFQUFFLEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO01BQXBDLFlBTEYsQ0FERjtJQVVEOzs7O0VBMUJrQmQsS0FBSyxDQUFDZSxTOztBQTZCM0IsZUFBZWIsTUFBZiJ9