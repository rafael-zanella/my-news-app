import { News } from '@/templates/News'

export async function getServerSideProps () {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return { props: {} }
}

export default News
