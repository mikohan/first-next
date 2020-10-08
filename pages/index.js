import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>First Next application Change</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
