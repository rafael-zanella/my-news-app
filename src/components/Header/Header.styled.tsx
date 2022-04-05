import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.onBackgroundColor};
`

export const Actions = styled.div`
  position: absolute;
  right: 20px;

`
