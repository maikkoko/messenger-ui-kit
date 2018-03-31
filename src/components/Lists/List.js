import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './list.css'

const List = ({ children, style }) => (
  <ul style={style}>
    {children}
  </ul>
)

List.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default List
 