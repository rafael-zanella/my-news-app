import { Header } from '@/components/Header/Header'
import { Nav } from '@/components/Nav/Nav'
import { Typography } from '@/design-system/Typography'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { useRouter } from 'next/router'

const Terms = () => {
  const { back } = useRouter()

  return (
    <DefaultLayout>
      <Header onBack={back} title="Terms & Conditions" />

      <main>
        <Typography type='h2' fontWeight={500}>Paragraph 1</Typography>
        <Typography type='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lectus non augue vehicula tempus. Pellentesque sit amet tincidunt nisi. Fusce sed arcu bibendum, semper diam sit amet, laoreet augue. Integer lobortis, dolor ac dignissim molestie, diam eros congue ex, in aliquam massa justo eget magna. Nulla sodales, magna pretium tempor egestas, massa odio lobortis orci, pretium rhoncus mauris lectus et enim. Aliquam mollis, lectus eget convallis iaculis, augue purus tincidunt nulla, quis eleifend est metus sed nibh. Proin nec leo at neque tristique efficitur. Fusce placerat tortor ac lacus iaculis, et dignissim ex dignissim.
        </Typography>

        <Typography type='h2' fontWeight={500}>Paragraph 2</Typography>
        <Typography type='p'>
          Maecenas tincidunt gravida magna, a viverra purus porttitor a. Cras iaculis mauris ut porttitor tincidunt. Integer dolor ante, interdum id maximus at, blandit nec enim. Vestibulum auctor arcu vitae felis interdum finibus. Maecenas hendrerit ut purus quis maximus. Praesent euismod, eros non vestibulum finibus, metus ex faucibus sapien, sit amet vulputate ante ante eu sapien. Vivamus eget sodales arcu.
        </Typography>

        <Typography type='h2' fontWeight={500}>Paragraph 3</Typography>
        <Typography type='p'>
          Duis ac vehicula mi, in fringilla neque. Vestibulum hendrerit a turpis id luctus. Cras vitae velit elit. Nunc laoreet gravida urna vel dapibus. Aenean sollicitudin blandit nibh, id euismod ex commodo quis. Aenean venenatis imperdiet velit, aliquet luctus sapien fermentum ullamcorper. Praesent ac lorem nec arcu mattis pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque maximus mollis sapien, non suscipit odio mollis non.
        </Typography>
      </main>
      <Nav />
    </DefaultLayout>
  )
}

export default Terms
