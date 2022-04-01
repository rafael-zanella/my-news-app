import { useTheme } from '@/Contexts/ThemeContext/ThemeContext'

const Home = () => {
  const { changeTheme } = useTheme()

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={changeTheme}>change theme</button>
    </div>
  )
}

export default Home
