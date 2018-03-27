/**
 * @class Button
 * @prop icon, string - choices: 'arrow', 'upload'. defaults: null
 * @prop disabled, bool
 * @prop primary, bool - checks if button has primary styles. default: false
 * @prop size, string - choices: 'small', 'medium', 'large'. default: 'medium'
 * @prop action, function (required) - action taken on button click
 * @prop text, string. default: 'Submit'
 * @prop fluid, bool. determines if button occupies container
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RightArrowIcon from '../../assets/RightArrowIcon'
import UploadIcon from '../../assets/UploadIcon'

import styles from '../../styles/button-styles.css'

class Button extends Component {

  state = {
    pressed: false
  }

  static propTypes = {
    icon: PropTypes.string,
    primary: PropTypes.bool,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    action: PropTypes.func.isRequired
  }

  getIcon = () => {
    switch (this.props.icon) {
      case 'arrow':
        return (
          <RightArrowIcon {...this.props} />
        )

      case 'upload':
        return (
          <UploadIcon {...this.props} />
        )

      default:
        return ''
    }
  }

  getClassNameBySize = () => {
    switch (this.props.size) {
      case 'small':
        return styles.smallButton
      
      case 'large':
        return styles.largeButton
      
      case 'medium':
      default:
        return styles.mediumButton
    }
  }

  render() {
    const { icon, primary, size, disabled, text, fluid } = this.props
    
    let className = this.getClassNameBySize()
    className = primary ? `${className} ${styles.primary}` : `${className} ${styles.squareButtonSecondary}`
    className = disabled ? `${className} ${styles.disabled}` : className
    className = fluid ? `${className} ${styles.squareButtonFull}` : className

    return (
      <div
        className={className}
        onClick={this.onClick}
        onTouchStart={this.togglePressedState}
        onTouchEnd={this.togglePressedState}
        onMouseDown={this.togglePressedState}
        onMouseUp={this.togglePressedState} 
      >
        <div className={this.state.pressed ?
          styles.squareButtonCurtain : ''} />

        {this.getIcon()}
        <span>
          {text || 'Submit'}
        </span>
      </div>
    )
  }

  onClick = () => {
    if (!this.props.disabled)
      this.props.action()
  }

  togglePressedState = () => {
		if (!this.props.disabled)
			this.setState({ pressed: !this.state.pressed })
	}
}

export default Button