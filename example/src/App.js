import React, { Component } from 'react'
import UIKit, { PageHeader } from 'messenger-ui-kit'
import Lists from './Lists'

export default class App extends Component {
  
  render () {
    return (
      <div>
        <PageHeader text="Redeem Tickets" />
        <Lists />
      </div>
    )
  }
}

/* 
List Item
16pt

List header
small - 11/12pt uppercase
large - 14pt semibold

Paragraph
14pt

Headers
16/17pt Semibold

Header/Dark Text
16pt Medium
*/