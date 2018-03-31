import React, { Component } from 'react'
import {
  List,
  ListHeader,
  ListItem
} from 'messenger-ui-kit'

class Lists extends Component {
  render() {
    return(
      <List>
          <ListHeader text="Receipts" />
          <ListItem text="List Item 1" secondaryText="Tickets: 2" />
          <ListItem text="List Item 1" />
          <ListItem text="List Item 1" />
          <ListItem text="List Item 1" />
        </List>
    )
  }
}

export default Lists