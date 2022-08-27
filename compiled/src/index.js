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
import Cow from './components/cow.jsx';
import Cowlist from './components/cowlist.jsx';
import AddCow from './components/addCow.jsx';
import { Parse } from './parse.js';
import { sampleCowData } from './cowDataSet.js';

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      data: sampleCowData,
      cowClicked: undefined
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        Parse.readAll(function (result) {
          _this2.setState({
            data: result
          });
        });
      }, 3000);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.setState({
        cowClicked: e.target.innerHTML
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Cow List"), /*#__PURE__*/React.createElement("div", {
        id: "top panel"
      }, /*#__PURE__*/React.createElement(Cow, {
        clicked: this.state.cowClicked,
        data: this.state.data
      })), /*#__PURE__*/React.createElement(AddCow, null), /*#__PURE__*/React.createElement(Cowlist, {
        data: this.state.data,
        cowClicked: this.handleClick.bind(this)
      }));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdERPTSIsIlJlYWN0IiwiQ293IiwiQ293bGlzdCIsIkFkZENvdyIsIlBhcnNlIiwic2FtcGxlQ293RGF0YSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwiY293Q2xpY2tlZCIsInVuZGVmaW5lZCIsInNldEludGVydmFsIiwicmVhZEFsbCIsInJlc3VsdCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsImlubmVySFRNTCIsImhhbmRsZUNsaWNrIiwiYmluZCIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb3cgZnJvbSAnLi9jb21wb25lbnRzL2Nvdy5qc3gnO1xuaW1wb3J0IENvd2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL2Nvd2xpc3QuanN4JztcbmltcG9ydCBBZGRDb3cgZnJvbSAnLi9jb21wb25lbnRzL2FkZENvdy5qc3gnO1xuaW1wb3J0IHsgUGFyc2UgfSBmcm9tICcuL3BhcnNlLmpzJztcbmltcG9ydCB7IHNhbXBsZUNvd0RhdGEgfSBmcm9tICcuL2Nvd0RhdGFTZXQuanMnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge2RhdGE6IHNhbXBsZUNvd0RhdGEsIGNvd0NsaWNrZWQ6IHVuZGVmaW5lZH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBQYXJzZS5yZWFkQWxsKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzdWx0fSlcbiAgICAgIH0pO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Nvd0NsaWNrZWQ6IGUudGFyZ2V0LmlubmVySFRNTH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q293IExpc3Q8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwidG9wIHBhbmVsXCI+XG4gICAgICAgICAgPENvdyBjbGlja2VkPXt0aGlzLnN0YXRlLmNvd0NsaWNrZWR9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFkZENvdyAvPlxuICAgICAgICA8Q293bGlzdCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGNvd0NsaWNrZWQ9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0Isc0JBQWhCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLHlCQUFuQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGlCQUE5Qjs7SUFHTUMsRzs7Ozs7RUFDSixhQUFhQyxLQUFiLEVBQW9CO0lBQUE7O0lBQUE7O0lBQ2xCLDBCQUFNQSxLQUFOO0lBQ0EsTUFBS0MsS0FBTCxHQUFhO01BQUNDLElBQUksRUFBRUosYUFBUDtNQUFzQkssVUFBVSxFQUFFQztJQUFsQyxDQUFiO0lBRmtCO0VBR25COzs7O1dBRUQsNkJBQW9CO01BQUE7O01BQ2xCQyxXQUFXLENBQUMsWUFBTTtRQUNoQlIsS0FBSyxDQUFDUyxPQUFOLENBQWMsVUFBQ0MsTUFBRCxFQUFZO1VBQ3hCLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO1lBQUNOLElBQUksRUFBRUs7VUFBUCxDQUFkO1FBQ0QsQ0FGRDtNQUdELENBSlUsRUFJUixJQUpRLENBQVg7SUFLRDs7O1dBRUQscUJBQVlFLENBQVosRUFBZTtNQUNiLEtBQUtELFFBQUwsQ0FBYztRQUFDTCxVQUFVLEVBQUVNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztNQUF0QixDQUFkO0lBQ0Q7OztXQUVELGtCQUFTO01BQ1Asb0JBQ0UsOENBQ0UsMkNBREYsZUFFRTtRQUFLLEVBQUUsRUFBQztNQUFSLGdCQUNFLG9CQUFDLEdBQUQ7UUFBSyxPQUFPLEVBQUUsS0FBS1YsS0FBTCxDQUFXRSxVQUF6QjtRQUFxQyxJQUFJLEVBQUUsS0FBS0YsS0FBTCxDQUFXQztNQUF0RCxFQURGLENBRkYsZUFLRSxvQkFBQyxNQUFELE9BTEYsZUFNRSxvQkFBQyxPQUFEO1FBQVMsSUFBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsSUFBMUI7UUFBZ0MsVUFBVSxFQUFFLEtBQUtVLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCO01BQTVDLEVBTkYsQ0FERjtJQVdEOzs7O0VBOUJlcEIsS0FBSyxDQUFDcUIsUzs7QUFpQ3hCdEIsUUFBUSxDQUFDdUIsTUFBVCxlQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7QUFDQSxlQUFlbEIsR0FBZiJ9