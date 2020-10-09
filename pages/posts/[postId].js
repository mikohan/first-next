import { useRouter } from 'next/router';

const Posts = (props) => {
  const router = useRouter();
  const { postId } = router.query;
  console.log(postId);
  return <h1>Posts Page {postId}</h1>;
};

export default Posts;
