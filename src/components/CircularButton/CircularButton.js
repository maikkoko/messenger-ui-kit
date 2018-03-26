/**
 * @class CircularButton
 * 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RightArrowIcon from '../../assets/RightArrowIcon'
import UploadIcon from '../../assets/UploadIcon'

import buttonStyles from '../../styles/button-styles.css'
import circularStyles from'./circular-button-styles.css'

class CircularButton extends Component {

	state = {
		pressed: false
	}

	static propTypes = {
		secondary: PropTypes.bool,
		icon: PropTypes.string,
		disabled: PropTypes.bool,
		action: PropTypes.func.isRequired
	}

	getIcon = () => {
		switch (this.props.icon) {
			case 'arrow':
				return (
					<RightArrowIcon
						{...this.props} />
				)

			case 'upload':
				return  (
					<UploadIcon
						{...this.props} />
				)
			
			default:
				return (
					<RightArrowIcon 
						{...this.props} />
				)
		}
	}

  render() {
		const { icon, secondary, disabled } = this.props

		let className = `${buttonStyles.button} ${circularStyles.circular}`
		className = icon === 'upload' ? className : `${className} ${circularStyles.circularNext}`
		className = secondary ? `${className} ${buttonStyles.secondary}` : `${className} ${buttonStyles.primary}`
		className = disabled ? `${className} ${buttonStyles.disabled}` : className

		return (
			<div className={className}
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

