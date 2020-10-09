import Link from 'next/link';
import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super();
  }
  static async getInitialProps({ req, query }) {
    return await { data: 'MY BEAUTEFULL DATA' };
  }
  render() {
    return (
      <div>
        <h1>About Page {this.props.data}</h1>
        <Link href="/">
          <button>Go Home</button>
        </Link>
      </div>
    );
  }
}
