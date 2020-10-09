import { postsUrl } from '../config';
import axios from 'axios';

export default function Home({ posts, result }) {
  return (
    <div>
      <h1>
        First Next application Change:
        <span style={{ color: 'blue' }}>{posts || null}</span>
      </h1>
      <ul>
        {result.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await axios.get(postsUrl);
  const { data } = res;

  return { name: 'My Posts', result: data };
};
