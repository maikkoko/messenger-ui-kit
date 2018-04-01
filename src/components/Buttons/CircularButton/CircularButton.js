/**
 * @class CircularButton
 * @prop icon, string - choices: 'arrow', 'upload'. defaults to 'arrow'
 * @prop disabled, bool
 * @prop action, function (required) - action taken on button click
 * @prop primary, bool - checks if button has primary styles. defaults to false
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RightArrowIcon from '../../../assets/RightArrowIcon'
import UploadIcon from '../../../assets/UploadIcon'

import buttonStyles from '../buttons.css'
import circularStyles from'./circular-button.css'

class CircularButton extends Component {

	state = {
		pressed: false
	}

	static propTypes = {
		primary: PropTypes.bool,
		icon: PropTypes.string,
		disabled: PropTypes.bool,
		action: PropTypes.func.isRequired,
		style: PropTypes.object
	}

	getIcon = () => {
		switch (this.props.icon) {
			case 'upload':
				return  (
					<UploadIcon
						{...this.props} />
				)

			case 'arrow':
			default:
				return (
					<RightArrowIcon
						{...this.props} />
				)
		}
	}

  render() {
		const { icon, primary, disabled } = this.props

		let className = `${buttonStyles.button} ${circularStyles.circular}`
		className = icon === 'upload' ? className : `${className} ${circularStyles.circularNext}`
		className = primary ? `${className} ${buttonStyles.primary}` : `${className} ${buttonStyles.secondary}`
		className = disabled ? `${className} ${buttonStyles.disabled}` : className

		return (
			<div
				style={style}
				className={className}
				onClick={this.onClick}
				onTouchStart={this.togglePressedState}
				onTouchEnd={this.togglePressedState}
				onMouseDown={this.togglePressedState}
				onMouseUp={this.togglePressedState} >

				<div className={this.state.pressed ?
					 `${buttonStyles.buttonCurtain} ${circularStyles.circularCurtain}` : ''} />

				{this.getIcon()}
			</div>
		)
	}

	onClick = () => {
		if (!this.props.disabled) {
			this.props.action()
		}
	}

	togglePressedState = () => {
		if (!this.props.disabled)
			this.setState({ pressed: !this.state.pressed })
	}

}

export default CircularButton

