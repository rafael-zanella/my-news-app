import { useState } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import * as Icons from '../index'
import { Container, GlobalStyle, ContainerIcons } from './Preview.styled'

const Search = styled.input`
  width: 100%;
  border-radius: 5px;
  color: black;
  padding: 5px;
  margin: 5px;
`

export const Preview = (props) => {
  const [selectedIcons, setSelectedIcons] = useState([])

  const [icons, setIcons] = useState(props.icons)

  const onClick = (event) => {
    const icon = event.currentTarget.dataset.nome

    setSelectedIcons((estadoAnterior) => {
      if (selectedIcons.includes(icon)) return estadoAnterior.filter(item => item !== icon)

      return estadoAnterior.concat(icon)
    })
  }

  return (
    <Container>
      <GlobalStyle />
      <header>
        <h1>Icons Design System</h1>
      </header>

      <div>
        <pre>
          {selectedIcons.length > 0
            ? <>{`import { ${selectedIcons.join(', ')} } from '@/icons';`}</>
            : <>{'import * as Icons from \'@/icons\';'}</>}

        </pre>
      </div>

      <main>

        {icons.length > 0 && (
        <>
          <h3>{props.titulo}</h3>
          <Search
            type="text"
            placeholder="Pesquise aqui"
            onChange={(event) => {
              setIcons(
                icons.map((item) => {
                  const pesquisa = event.target.value.toLowerCase()
                  item.isVisivel = item.icone.toLowerCase().includes(pesquisa)
                  return item
                })
              )
            }}
          />
          <ContainerIcons>
            {icons
              .filter(({ isVisivel }) => isVisivel === true)
              .map(({ icone }) => (
                <div
                  key={icone}
                  title={icone}
                  data-nome={icone}
                  data-selected={selectedIcons.includes(icone)}
                  onClick={onClick}
                  role="button"
                  tabIndex={0}
                >
                  {React.createElement(Icons[icone])}
                </div>
              ))}
          </ContainerIcons>
        </>
        )}
      </main>
    </Container>
  )
}
