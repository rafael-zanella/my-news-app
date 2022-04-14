import styled from 'styled-components'

export const Logo = styled.div`
  grid-area: logo;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.onBackgroundColor};
`

export const Actions = styled.div`
  grid-area: actions;
  justify-self: flex-end;
  align-self: flex-end;
`

export const Container = styled.header`
  display: grid;
  height: 50px;
  width: 100%;
  align-content: center;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". logo actions"
  ;

  @media screen and (min-width: 800px) {
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "actions"
    ;
    align-content: space-between;
    justify-items: end;

    ${Logo} {
      h2 {
        display: none;
      }
    }

    ${Actions} {
      justify-self: end;
      align-self: inherit;
    }
  }
`
