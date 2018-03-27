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
          <CircularButton action={this.clickAction} primary />
          <CircularButton action={this.clickAction}  primary icon="arrow" />
        </div>
        <div>
          <CircularButton action={this.clickAction} />
          <CircularButton action={this.clickAction} icon="upload" />
        </div>
        <div>
          <CircularButton disabled action={this.clickAction} />
          <CircularButton disabled action={this.clickAction} icon="upload" />
        </div>

        <br />

        <div>
          <Button action={this.clickAction} size="small" primary />
          <Button action={this.clickAction} text="Next" size="small" primary icon="arrow" />
          <Button action={this.clickAction} text="Upload" size="small" primary icon="upload" />
        </div>

        <div>
          <Button size="small" action={this.clickAction} />
          <Button action={this.clickAction} text="Next" size="small" icon="arrow" />
          <Button action={this.clickAction} text="Upload" size="small" icon="upload" />
        </div>

        <div>
          <Button disabled size="small" primary action={this.clickAction} />
          <Button disabled action={this.clickAction} text="Next" size="small" icon="arrow" />
          <Button disabled action={this.clickAction} text="Upload" size="small" icon="upload" />
        </div>

        <br />

        <div>
          <Button action={this.clickAction} primary />
          <Button action={this.clickAction} primary text="Next" size="medium" icon="arrow" />
          <Button action={this.clickAction} primary text="Upload" icon="upload" />
        </div>

        <div>
          <Button action={this.clickAction} />
          <Button action={this.clickAction} text="Next" size="medium" icon="arrow" />
          <Button action={this.clickAction} text="Upload" icon="upload" />
        </div>

        <div>
          <Button disabled primary action={this.clickAction} />
          <Button disabled action={this.clickAction} text="Next" size="medium" icon="arrow" />
          <Button disabled action={this.clickAction} text="Upload" icon="upload" />
        </div>

        <br />

        <div>
          <Button action={this.clickAction} size="large" primary />
          <Button action={this.clickAction} primary text="Next" size="large" icon="arrow" />
          <Button action={this.clickAction} primary text="Upload" size="large" icon="upload" />
        </div>

        <div>
          <Button size="large" action={this.clickAction} />
          <Button action={this.clickAction} text="Next" size="large" icon="arrow" />
          <Button action={this.clickAction} text="Upload" size="large" icon="upload" />
        </div>

        <div>
          <Button disabled size="large" primary action={this.clickAction} />
          <Button disabled action={this.clickAction} text="Next" size="large" icon="arrow" />
          <Button disabled action={this.clickAction} text="Upload" size="large" icon="upload" />
        </div>

        <br />
        
        <div>
          <Button primary action={this.clickAction} fluid text="Next" size="large" icon="arrow" />
          <Button action={this.clickAction} fluid text="Upload" size="large" icon="upload" />
          <Button disabled action={this.clickAction} fluid text="Disabled" size="large" />
        </div>
      </div>
    )
  }
}
