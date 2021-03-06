'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./TripleSelectBox.css');

var _Untitled = require('./Untitled-1');

var _Untitled2 = _interopRequireDefault(_Untitled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_LINES_NUM = 8;

var TripleSelectBox = function (_Component) {
	_inherits(TripleSelectBox, _Component);

	function TripleSelectBox(props) {
		_classCallCheck(this, TripleSelectBox);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			rightSelectedValues: [],
			leftSelectedValues: [],
			nonSelectedValues: []
		};
		_this._onClickUnSelectFromLeft = _this._onClickUnSelectFromLeft.bind(_this);
		_this._onClickUnSelectFromRight = _this._onClickUnSelectFromRight.bind(_this);
		_this._onClickSelectToRight = _this._onClickSelectToRight.bind(_this);
		_this._onClickSelectToLeft = _this._onClickSelectToLeft.bind(_this);
		return _this;
	}

	TripleSelectBox.prototype._excludeValues = function _excludeValues() {
		var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var valuesToExclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var compareFn = this.props.compareFn;

		if (compareFn instanceof Function) {
			return values.filter(function (value) {
				return !valuesToExclude.some(function (valueToExclude) {
					return compareFn(valueToExclude, value);
				});
			});
		}
		return values.filter(function (value) {
			return !valuesToExclude.some(function (exclude) {
				return exclude == value;
			});
		});
	};

	TripleSelectBox.prototype._addValues = function _addValues() {
		var arrayToAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var valuesToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

		return arrayToAdd.concat(valuesToAdd);
	};

	TripleSelectBox.prototype._unSelectNode = function _unSelectNode(id) {
		var selectBoxChilds = document.getElementById(id).childNodes;
		selectBoxChilds.forEach(function (node) {
			if (node.selected) {
				node.selected = false;
				return;
			}
		});
	};

	TripleSelectBox.prototype._onClickSelectToRight = function _onClickSelectToRight() {
		var _props = this.props,
		    id = _props.id,
		    onChange = _props.onChange;

		var clickedCodesForSelection = this.state.nonSelectedValues;

		var _props2 = this.props,
		    centerValues = _props2.centerValues,
		    rightValues = _props2.rightValues;
		var leftValues = this.props.leftValues;


		centerValues = this._excludeValues(centerValues, clickedCodesForSelection);
		rightValues = this._addValues(rightValues, clickedCodesForSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ nonSelectedValues: [] });
		this._unSelectNode(id + '-center-select-values-box');
	};

	TripleSelectBox.prototype._onClickSelectToLeft = function _onClickSelectToLeft() {
		var _props3 = this.props,
		    id = _props3.id,
		    onChange = _props3.onChange;

		var clickedCodesForSelection = this.state.nonSelectedValues;

		var _props4 = this.props,
		    leftValues = _props4.leftValues,
		    centerValues = _props4.centerValues;
		var rightValues = this.props.rightValues;


		centerValues = this._excludeValues(centerValues, clickedCodesForSelection);
		leftValues = this._addValues(leftValues, clickedCodesForSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ nonSelectedValues: [] });
		this._unSelectNode(id + '-center-select-values-box');
	};

	TripleSelectBox.prototype._onClickUnSelectFromLeft = function _onClickUnSelectFromLeft() {
		var _props5 = this.props,
		    id = _props5.id,
		    onChange = _props5.onChange;

		var clickedCodesForUnSelection = this.state.leftSelectedValues;
		var rightValues = this.props.rightValues;
		var _props6 = this.props,
		    leftValues = _props6.leftValues,
		    centerValues = _props6.centerValues;


		leftValues = this._excludeValues(leftValues, clickedCodesForUnSelection);
		centerValues = this._addValues(centerValues, clickedCodesForUnSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ leftSelectedValues: [] });
		this._unSelectNode(id + '-left-select-values-box');
	};

	TripleSelectBox.prototype._onClickUnSelectFromRight = function _onClickUnSelectFromRight() {
		var _props7 = this.props,
		    id = _props7.id,
		    onChange = _props7.onChange;

		var clickedCodesForUnSelection = this.state.rightSelectedValues;
		var leftValues = this.props.leftValues;
		var _props8 = this.props,
		    rightValues = _props8.rightValues,
		    centerValues = _props8.centerValues;


		rightValues = this._excludeValues(rightValues, clickedCodesForUnSelection);
		centerValues = this._addValues(centerValues, clickedCodesForUnSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ rightSelectedValues: [] });
		this._unSelectNode(id + '-right-select-values-box');
	};

	TripleSelectBox.prototype._renderLeftPanel = function _renderLeftPanel() {
		var _this2 = this;

		var _props9 = this.props,
		    id = _props9.id,
		    titleLeftBox = _props9.titleLeftBox;
		var leftValues = this.props.leftValues;


		return _react2.default.createElement(
			'div',
			{ style: { display: 'inline-block', textAlign: 'center' } },
			_react2.default.createElement(
				'label',
				{
					className: 'label-style',
					style: _extends({}, this.props.labelStyle)
				},
				titleLeftBox
			),
			_react2.default.createElement(
				'select',
				{
					id: id + '-left-select-values-box',
					onChange: function onChange(ev) {
						leftValues = Array.apply(null, ev.target.options).filter(function (option) {
							return option.selected;
						}).map(function (o) {
							return o.value;
						});
						_this2.setState({ leftSelectedValues: leftValues });
					},
					className: 'box-style',
					style: _extends({}, this.props.boxStyle),
					size: this.props.numberOfLines || DEFAULT_LINES_NUM,
					multiple: true
				},
				leftValues.map(function (value) {
					return _react2.default.createElement(
						'option',
						{ key: value, className: 'select-box-option', style: { fontSize: '14px', fontWeight: 600 }, value: value },
						value
					);
				})
			)
		);
	};

	TripleSelectBox.prototype._renderRightPanel = function _renderRightPanel() {
		var _this3 = this;

		var _props10 = this.props,
		    id = _props10.id,
		    titleRightBox = _props10.titleRightBox;
		var rightValues = this.props.rightValues;


		return _react2.default.createElement(
			'div',
			{ style: { display: 'inline-block', textAlign: 'center' } },
			_react2.default.createElement(
				'label',
				{
					className: 'label-style',
					style: _extends({}, this.props.labelStyle)
				},
				titleRightBox
			),
			_react2.default.createElement(
				'select',
				{
					id: id + '-right-select-values-box',
					onChange: function onChange(ev) {
						rightValues = Array.apply(null, ev.target.options).filter(function (option) {
							return option.selected;
						}).map(function (o) {
							return o.value;
						});
						_this3.setState({ rightSelectedValues: rightValues });
					},
					className: 'box-style',
					style: _extends({}, this.props.boxStyle),
					size: this.props.numberOfLines || DEFAULT_LINES_NUM,
					multiple: true
				},
				rightValues.map(function (value) {
					return _react2.default.createElement(
						'option',
						{ key: value, className: 'select-box-option', style: { fontSize: '14px', fontWeight: 600 }, value: value },
						value
					);
				})
			)
		);
	};

	TripleSelectBox.prototype._renderCenterPanel = function _renderCenterPanel() {
		var _this4 = this;

		var _props11 = this.props,
		    id = _props11.id,
		    titleNonselectedBox = _props11.titleNonselectedBox;
		var centerValues = this.props.centerValues;


		return _react2.default.createElement(
			'div',
			{ style: { display: 'inline-block', textAlign: 'center' } },
			_react2.default.createElement(
				'label',
				{
					className: 'label-style',
					style: _extends({}, this.props.labelStyle)
				},
				titleNonselectedBox
			),
			_react2.default.createElement(
				'select',
				{
					id: id + '-center-select-values-box',
					onChange: function onChange(ev) {
						centerValues = Array.apply(null, ev.target.options).filter(function (option) {
							return option.selected;
						}).map(function (o) {
							return o.value;
						});
						_this4.setState({ nonSelectedValues: centerValues });
					},
					className: 'box-style',
					style: _extends({}, this.props.boxStyle),
					size: this.props.numberOfLines || DEFAULT_LINES_NUM,
					multiple: true
				},
				centerValues.map(function (value) {
					return _react2.default.createElement(
						'option',
						{ key: value, className: 'select-box-option', style: { fontSize: '14px', fontWeight: 600 }, value: value },
						value
					);
				})
			)
		);
	};

	TripleSelectBox.prototype._renderLeftButtons = function _renderLeftButtons() {
		return _react2.default.createElement(
			'div',
			{ style: { display: 'inline-block', bottom: '60px', position: 'relative' } },
			_react2.default.createElement('input', {
				id: 'btnRight',
				type: 'button',
				className: 'input-style btn-arrows',
				value: '>>',
				onClick: this._onClickUnSelectFromLeft,
				disabled: !this.state.leftSelectedValues.length
			}),
			_react2.default.createElement('input', {
				id: 'btnLeft',
				type: 'button',
				className: 'input-style btn-arrows',
				value: '<<',
				onClick: this._onClickSelectToLeft,
				disabled: !this.state.nonSelectedValues.length
			})
		);
	};

	TripleSelectBox.prototype._renderRightButtons = function _renderRightButtons() {
		return _react2.default.createElement(
			'div',
			{ style: { display: 'inline-block', bottom: '60px', position: 'relative' } },
			_react2.default.createElement('input', {
				id: 'btnRight',
				type: 'button',
				className: 'input-style btn-arrows',
				style: _extends({}, this.props.inputStyle),
				value: '>>',
				onClick: this._onClickSelectToRight,
				disabled: !this.state.nonSelectedValues.length
			}),
			_react2.default.createElement('input', {
				id: 'btnLeft',
				type: 'button',
				className: 'input-style btn-arrows',
				style: _extends({}, this.props.inputStyle),
				value: '<<',
				onClick: this._onClickUnSelectFromRight,
				disabled: !this.state.rightSelectedValues.length
			})
		);
	};

	TripleSelectBox.prototype.render = function render() {
		var id = this.props.id;

		return _react2.default.createElement(
			'div',
			{ id: id, style: { display: 'inline-block', padding: '10px', margin: 'auto' } },
			_react2.default.createElement(_Untitled2.default, { test: '1' }),
			this._renderLeftPanel(),
			this._renderLeftButtons(),
			this._renderCenterPanel(),
			this._renderRightButtons(),
			this._renderRightPanel()
		);
	};

	return TripleSelectBox;
}(_react.Component);

exports.default = TripleSelectBox;


process.env.NODE_ENV !== "production" ? TripleSelectBox.propTypes = {
	id: _propTypes2.default.string.isRequired,
	numberOfLines: _propTypes2.default.number,
	boxStyle: _propTypes2.default.object,
	labelStyle: _propTypes2.default.object,
	inputStyle: _propTypes2.default.object,
	rightValues: _propTypes2.default.array.isRequired,
	leftValues: _propTypes2.default.array.isRequired,
	centerValues: _propTypes2.default.array.isRequired,
	titleRightBox: _propTypes2.default.string.isRequired,
	titleLeftBox: _propTypes2.default.string.isRequired,
	titleNonselectedBox: _propTypes2.default.string.isRequired,
	compareFn: _propTypes2.default.func,
	onChange: _propTypes2.default.func.isRequired
} : void 0;
module.exports = exports['default'];