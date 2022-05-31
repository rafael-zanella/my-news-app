import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const Notifications = () => {
  return (
    <DefaultLayout>
      <Header title="Notifications" />
      <main style={{ justifyContent: 'center' }}>
        Em desenvolvimento!
      </main>
      <Nav />
    </DefaultLayout>
  )
}

export default Notifications
