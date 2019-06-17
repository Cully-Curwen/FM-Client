import React from 'react';
import PropTypes from 'prop-types';

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.formatDisplay = this.formatDisplay.bind(this);
    this.scrubValue = this.scrubValue.bind(this);
  }

  handleChange(event) {
    const cleanValue = this.scrubValue(event.target.value);
    this.props.onChange(cleanValue);
  }

  scrubValue(value) {
    if (!value) {
      value = 0;
    }
    value = `${value}`.match(/\d/g);
    // catches if value was made null
    value = value ? value.join('') : 0;

    return parseInt(value, 10);
  }

  formatDisplay(value) {
    value = this.scrubValue(value);
    value *= Math.pow(10, -this.props.minorUnit);
    value = value.toLocaleString(this.props.locales, this.props.currencySet);
    return value;
  }

  render() {
    return (
      <input
        className={this.props.className}
        name={this.props.name}
        value={this.formatDisplay(this.props.value)}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onChange={this.handleChange}
        disabled={this.props.disabled}
        autoFocus={this.props.autoFocus}
        tabIndex={this.props.tabIndex}
        readOnly={this.props.readOnly}
        autoComplete={this.props.autoComplete}
        autoCorrect={this.props.autoCorrect}
        placeholder={this.props.placeholder}
      />
    );
  }
}

CurrencyInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  tabIndex: PropTypes.number,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  placeholder: PropTypes.string,
  locales: PropTypes.string,
  currencySet: PropTypes.shape({
    style: PropTypes.oneOf(['currency']),
    currency: PropTypes.string,
    currencyDisplay: PropTypes.oneOf(['symbol', 'code', 'name']),
    useGrouping: PropTypes.bool
  }),
  minorUnit: PropTypes.number
};

CurrencyInput.defaultProps = {
  value: 0,
  locales: 'en-GB',
  currencySet: {
    style: 'currency',
    currency: 'GBP',
    currencyDisplay: 'symbol',
    useGrouping: true
  },
  minorUnit: 2,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};

export default CurrencyInput;