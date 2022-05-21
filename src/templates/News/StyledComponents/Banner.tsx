import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media screen and (min-width: 590px) {
    height: 250px;
  }
`
