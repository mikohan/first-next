import Axios from 'axios';
import { useRouter } from 'next/router';
import { commentsUrl, postsUrl } from '../../config';

const Posts = ({ post, comments }) => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <div>
      <h1>Posts Page</h1>
      <h2>{post.title.toUpperCase()}</h2>
      <ul>
        {comments.map((comment) => (
          <li>
            <span style={{ fontWeight: 'bold' }}>{comment.name}</span>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
async function getPost(id) {
  const res = await Axios.get(`${postsUrl}/${id}`);

  return await res.data;
}

Posts.getInitialProps = async ({ query }) => {
  const res = await Axios.get(`${commentsUrl}${query.postId}`);
  const { data } = res;
  const post = await getPost(query.postId);

  return { post: post, comments: data };
};

export default Posts;
