import styled from 'styled-components'

export const DefaultLayout = styled.div`
  min-height: 100vh;
  padding: 10px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 1280px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    
    main {
      margin: 0 100px;
      max-width: 700px;
    }
  }
`
