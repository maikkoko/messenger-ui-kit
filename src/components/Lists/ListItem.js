import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './list.css'

class ListItem extends Component {
  state = {
    pressed: false
  }

  static propTypes = {
    text: PropTypes.string,
    secondaryText: PropTypes.string,
    rightText: PropTypes.string
  }

  render() {
    const { text, rightText, secondaryText } = this.props

    const secondary = secondaryText ? (
      <p className={styles.secondary}>{secondaryText}</p>
    ) : (
      ''
    )

    const className = this.state.pressed ? styles.pressed : ''

    return (
      <li
        className={className}
        onTouchStart={this.togglePressedState}
        onTouchEnd={this.togglePressedState}
        onMouseUp={this.togglePressedState}
        onMouseDown={this.togglePressedState}
      >
        <div>
          <p>{this.props.text}</p>
          {secondary}
        </div>
        <div className={styles.rightText}>2000</div>
      </li>
    )
  }

  togglePressedState = () => {
    this.setState({
      pressed: !this.state.pressed
    })
  }
}

export default ListItem
