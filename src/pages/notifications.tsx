import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const Notifications = () => {
  return (
    <DefaultLayout>
      <Header title="Notificações" />
      <main style={{ justifyContent: 'center' }}>
        Sem novas notificações!
      </main>
      <Nav />
    </DefaultLayout>
  )
}

export default Notifications
