import { Categories } from '@/components/Categories/Categories'
import { Header } from '@/components/Header/Header'
import { Page } from '@/layouts/Page'

const Home = () => {
  return (
    <Page>
      <div style={{ gridArea: 'header' }}>
        <Header />
      </div>

      <div style={{ gridArea: 'categories' }}>
        <Categories defaultValue='All' onChange={() => {}} />
      </div>

      <main style={{ gridArea: 'main' }}>
        Noticia
      </main>

    </Page>
  )
}

export default Home
