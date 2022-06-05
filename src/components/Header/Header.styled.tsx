import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  overflow: unset;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

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
