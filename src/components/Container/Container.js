import React from 'react'
import PropTypes from 'prop-types'

import styles from './container.css'

const Container = ({ children }) => (
  <div className={styles.container}>
    { children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Container