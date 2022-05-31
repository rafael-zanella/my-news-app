import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const Settings = () => {
  return (
    <DefaultLayout>
      <Header title="Settings" />
      <main style={{ justifyContent: 'center' }}>
        Em desenvolvimento!
      </main>
      <Nav />
    </DefaultLayout>
  )
}

export default Settings
