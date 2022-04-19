import { useRouter } from 'next/router'

export async function getServerSideProps () {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return { props: {} }
}

const News = () => {
  const { query } = useRouter()

  return (
    <div>Minha noticia {query.id}</div>
  )
}

export default News
