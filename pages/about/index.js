import Link from 'next/link';
import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super();
  }
  static async getInitialProps({ req, query }) {
    await console.log('FETCHING dATA', req);
    return await { req };
  }
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <Link href="/">
          <button>Go Home</button>
        </Link>
      </div>
    );
  }
}
