import React, { Component } from 'react'
import Buttons from './Buttons'
import {
  Button,
  BottomButton,
  Container
} from 'messenger-ui-kit'

export default class App extends Component {
  
  render () {
    return (
      <div>
        <Container>
          <h1>hello</h1>

          <Button primary text="Upload" icon="upload" />
        </Container>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Container>

        <Buttons />

        <BottomButton primary text="Next Step" />
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