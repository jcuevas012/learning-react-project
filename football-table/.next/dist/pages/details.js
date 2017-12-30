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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

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

            var detailStyle = {
                ul: {
                    marginTop: '100px'
                }
            };

            return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'League Table'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })), _react2.default.createElement('div', { className: 'pure-g' }, _react2.default.createElement('div', { className: 'pure-u-8-24' }), _react2.default.createElement('div', { className: 'pure-u-4-24' }, _react2.default.createElement('h2', null, this.props.standing[0].teamName), _react2.default.createElement('img', { src: this.props.standing[0].crestURI, className: 'pure-img' }), _react2.default.createElement('h3', null, 'Points: ', this.props.standing[0].points)), _react2.default.createElement('div', { className: 'pure-u-12-24' }, _react2.default.createElement('ul', { style: detailStyle.ul }, _react2.default.createElement('li', null, _react2.default.createElement('strong', null, 'Goals'), ': ', this.props.standing[0].goals), _react2.default.createElement('li', null, _react2.default.createElement('strong', null, 'Wins'), ': ', this.props.standing[0].wins), _react2.default.createElement('li', null, _react2.default.createElement('strong', null, 'Losses'), ': ', this.props.standing[0].losses), _react2.default.createElement('li', null, _react2.default.createElement('strong', null, 'Draws'), ': ', this.props.standing[0].draws), _react2.default.createElement('li', null, _react2.default.createElement('strong', null, 'Goals Against'), ': ', this.props.standing[0].goalsAgainst), _react2.default.createElement('li', null, _react2.default.createElement('strong', null, 'Goal Difference'), ': ', this.props.standing[0].goalDifference), _react2.default.createElement('li', null, _react2.default.createElement('strong', null, 'Played'), ': ', this.props.standing[0].playedGames)), _react2.default.createElement(_link2.default, { href: '/' }, 'Home'))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var query = _ref.query;
                var id, res, bplData;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                id = query.id;

                                if (process.browser) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 4;
                                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

                            case 4:
                                res = _context.sent;
                                return _context.abrupt('return', {
                                    data: res.data,
                                    standing: res.data.standing.filter(function (s) {
                                        return s.position == id;
                                    })
                                });

                            case 8:
                                bplData = JSON.parse(sessionStorage.getItem('bpl'));
                                return _context.abrupt('return', { standing: bplData.standing.filter(function (s) {
                                        return s.position == id;
                                    }) });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(_react.Component);

exports.default = _class;