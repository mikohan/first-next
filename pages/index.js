export default function Home({ result }) {
  return (
    <div>
      <h1>
        First Next application Change:
        <span style={{ color: 'blue' }}>{result}</span>
      </h1>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  console.log('Console output');
  return { result: 'Inside Initial Props' };
};
