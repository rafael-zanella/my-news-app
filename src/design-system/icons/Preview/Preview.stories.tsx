import React from 'react'
import * as Icons from '../'
import { Preview } from '../Preview/Preview'

export default {
  title: 'Design System / Icons / Preview',
  components: Preview
}

const monocolor = Object.keys(Icons)
  .map(icone => ({ icone, isVisivel: true }))

export const Monocolor = () => <Preview icons={monocolor} titulo="Monocolor Icons" />
