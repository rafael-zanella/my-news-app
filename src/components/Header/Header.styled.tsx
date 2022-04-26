import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  svg {
    cursor: pointer;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px
`
