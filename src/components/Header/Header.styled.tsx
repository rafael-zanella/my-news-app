import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50px;
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h1 {
    font: ${({ theme }) => theme.fonts.h1Bold};
    color: ${({ theme }) => theme.colors.onBackgroundColor};
    margin: 0;
    padding: 0;
  }
`

export const Actions = styled.div`
  position: absolute;
  right: 20px;

`
