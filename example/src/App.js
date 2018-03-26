import React, { Component } from 'react'

import { 
  Button,
  CircularButton
} from 'messenger-ui-kit'

export default class App extends Component {
  clickAction = () => {
    console.log('hello')
  }

  render () {
    return (
      <div>
        <div>
          <CircularButton action={this.clickAction} />
          <CircularButton action={this.clickAction} icon="upload" />
        </div>
        <div>
          <CircularButton action={this.clickAction} secondary />
          <CircularButton action={this.clickAction} secondary icon="upload" />
        </div>
        <div>
          <CircularButton disabled />
          <CircularButton disabled icon="upload" />
        </div>

        <br />

        <div>
          <Button action={this.clickAction} />
          <Button action={this.clickAction} icon="upload" />
        </div>

        <div>
        <Button secondary action={this.clickAction} />
        <Button secondary action={this.clickAction} icon="upload" />
      </div>
      </div>
    )
  }
}
