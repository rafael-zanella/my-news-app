import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const Bookmarked = () => {
  return (
    <DefaultLayout>
      <Header title="Bookmarked" />
      <main style={{ justifyContent: 'center' }}>
        Em desenvolvimento!
      </main>
      <Nav />
    </DefaultLayout>
  )
}

export default Bookmarked
