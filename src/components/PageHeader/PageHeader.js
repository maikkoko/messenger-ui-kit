import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './page-header.css';

class PageHeader extends Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func
  };

  render() {
    const { text } = this.props;

    return (
      <a className={styles.pageHeader} href="#" onClick={this.executeAction}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <span>{text}</span>
      </a>
    );
  }

  executeAction = () => {
    this.props.action();
  };
}

export default PageHeader;
