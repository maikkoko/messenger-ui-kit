import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './page-header.css';

class PageHeader extends Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    style: PropTypes.object
  };

  render() {
    const { text, style } = this.props;

    return (
      <a style={style} className={styles.pageHeader} onClick={this.executeAction}>
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
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <span>{text}</span>
      </a>
    );
  }

  executeAction = () => {
    if (this.props.action) this.props.action();
  };
}

export default PageHeader;
