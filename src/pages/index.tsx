import type { NextPage } from 'next'
import { Button } from '../components/Button/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button title='Clique aqui!' />
    </div>
  )
}

export default Home
