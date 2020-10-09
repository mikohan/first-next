import { postsUrl } from '../config';
import axios from 'axios';
import Link from 'next/link';
import Posts from './posts';

export default function Home({ posts, result }) {
  return (
    <div>
      <h1>
        First Next application Change:
        <span style={{ color: 'blue' }}>{posts}</span>
      </h1>
      <ul>
        {result.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await axios.get(postsUrl);
  const { data } = res;
  const ten = data.slice(0, 10);

  return { name: 'My Posts', result: ten };
};
