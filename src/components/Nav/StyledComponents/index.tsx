import styled from 'styled-components'

export const Item = styled.div`
  padding: 15px;
  cursor: pointer;
`

export const Menu = styled.div`
  background-color: ${props => props.theme.colors.backgroundColor};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px -1px 5px 0px rgba(50, 50, 50, 0.1);
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.onBackgroundColor};
`

export const Notification = styled.div`
  position: absolute;
  right: 0;
`

export const Container = styled.div`
  position: relative;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  gap: 10px;



  @media screen and (min-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;

    height: 100vh;
    width: 60px;
    
    display: flex;
    flex-direction: column;
    gap: 20px;

    border-right: 1px solid ${({ theme }) => theme.colors.complementaryColor};



    ${Logo} {
      position: fixed;
      top: 40px;
      
      h2 { display: none }
    }
    ${Notification} { position: relative }

    ${Menu} {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 20px;

      width: unset;
      box-shadow: none;

      ${Item} { padding: 0 }

    }

  }


`
