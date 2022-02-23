import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getStaticProps(context) {
  const res = await fetch('https://6215cb41c9c6ebd3ce31d9f8.mockapi.io/mock/users');
  const users = await res.json()
  return {
    props: {
      users
    }, // will be passed to the page component as props
  }
}

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>On Demand ISR</title>
        <meta name="description" content="On Demand ISR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </main>
    </div>
  )
}
