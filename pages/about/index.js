import Link from 'next/link';
import axios from 'axios';
import { postsUrl } from '../../config';
import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super();
  }
  static async getInitialProps() {
    const res = await axios.get(postsUrl);
    const { data } = res;
    const ten = data.slice(0, 10);

    return { name: 'My Posts', result: ten };
  }

  render() {
    return (
      <div>
        <h1>About Page {this.props.name}</h1>
        <Link href="/">
          <button>Go Home</button>
        </Link>
        <ul>
          {this.props.result.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
