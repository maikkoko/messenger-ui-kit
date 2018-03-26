import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RightArrowIcon from '../../assets/RightArrowIcon'
import UploadIcon from '../../assets/UploadIcon'

import squareStyles from './square-button-styles.css'
import buttonStyles from '../../styles/button-styles.css'

class Button extends Component {

  static propTypes = {
    icon: PropTypes.string,
    secondary: PropTypes.bool,
    size: PropTypes.string,
    action: PropTypes.func.isRequired
  }

  render() {
    const { icon, secondary, size } = this.props

    let className = `${buttonStyles.button} ${squareStyles.squareButton}`
    className = secondary ? `${className} ${buttonStyles.secondary}` : `${className} ${buttonStyles.primary}`

    return (
      <div className={className} >
        <RightArrowIcon />
        <span>Send</span>
      </div>
    )
  }
}

export default Button

// large 
// height 48

// medium
// height 40

// small
// height 32