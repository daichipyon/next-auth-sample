import Image from 'next/image'
import styles from './page.module.css'
import { User } from '../app/user'

export default async function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <User />
      </div>
    </main>
  )
}
