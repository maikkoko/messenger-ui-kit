import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './list.css'

class ListHeader extends Component {
  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    return <li style={this.props.style} className={styles.header}>{this.props.text}</li>
  }
}

export default ListHeader
