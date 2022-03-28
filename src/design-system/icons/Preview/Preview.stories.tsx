import React from 'react';
import * as Icons from '../';
import { Preview } from '../Preview/Preview';

export default {
  title: 'Design System / Icons / Preview',
  components: Preview,
};

/* const bicolores = Object.keys(Icones)
  .filter(icone => Icones[icone].bicolor)
  .map(icone => ({ icone, isVisivel: true })); */

const monocolor = Object.keys(Icons)
  .filter(icone => !Icons[icone].bicolor && !Icons[icone].outros)
  .map(icone => ({ icone, isVisivel: true }));

/* const outros = Object.keys(Icones)
  .filter(icone => Icones[icone].outros)
  .map(icone => ({ icone, isVisivel: true })); */


export const Monocolor = () => <Preview icons={monocolor} titulo="Icones Monocolores" />;

/* export const Bicolores = () => <Preview icones={bicolores} titulo="Icones Bicolores" />;

export const Outros = () => <Preview icones={outros} titulo="Icones Outros" />; */
