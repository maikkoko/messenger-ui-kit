/**
 * @class BottomButton
 * @prop icon, string - choices: 'arrow', 'upload'. defaults: null
 * @prop disabled, bool
 * @prop primary, bool - checks if button has primary styles. default: false
 * @prop action, function (required) - action taken on button click
 * @prop text, string. default: 'Submit'
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

import styles from './bottom-button.css'

class BottomButton extends Component {
  render() {
    let props = {...this.props, fluid: true, size: "large" }

    return (
      <div style={props.style} className={styles.bottomButton} >
        <Button {...props} />
      </div>
    )
  }
}

export default BottomButton