'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!sessionStorage.getItem('bpl')) {
                sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Leagua Table'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', {
                rel: 'stylesheet',
                href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })), _react2.default.createElement('div', { className: 'pure-g' }, _react2.default.createElement('div', { className: 'pure-u-1-3' }), _react2.default.createElement('div', { className: 'pure-u-1-3' }, _react2.default.createElement('h1', null, 'Leagua Table'), _react2.default.createElement('table', { className: 'pure-table' }, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Position'), _react2.default.createElement('th', null, 'Team'), _react2.default.createElement('th', null, 'P'), _react2.default.createElement('th', null, 'GL'), _react2.default.createElement('th', null, 'W'), _react2.default.createElement('th', null, 'D'), _react2.default.createElement('th', null, 'L'), _react2.default.createElement('th', null, 'Ver'))), _react2.default.createElement('tbody', null, this.props.data.standing.map(function (standing, i) {
                var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                return _react2.default.createElement('tr', { key: i, className: oddOrNot }, _react2.default.createElement('td', null, standing.position), _react2.default.createElement('td', null, _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI })), _react2.default.createElement('td', null, standing.points), _react2.default.createElement('td', null, standing.goals), _react2.default.createElement('td', null, standing.wins), _react2.default.createElement('td', null, standing.draws), _react2.default.createElement('td', null, standing.losses), _react2.default.createElement('td', null, ' ', _react2.default.createElement(_link2.default, { href: '/details?id=' + standing.position }, ' More... ')));
            }))))), _react2.default.createElement('div', { className: 'pure-u-1-3' }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (process.browser) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 3;
                                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

                            case 3:
                                res = _context.sent;
                                return _context.abrupt('return', { data: res.data });

                            case 7:
                                return _context.abrupt('return', {
                                    data: JSON.parse(sessionStorage.getItem('bpl'))
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(_react.Component);

exports.default = _class;