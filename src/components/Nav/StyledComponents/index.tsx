import styled from 'styled-components'

export const Item = styled.div`
  padding: 15px;
  cursor: pointer;
`

export const Menu = styled.div`
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  

  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;

    box-shadow: 0px -1px 5px 0px rgba(50, 50, 50, 0.1);
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.onBackgroundColor};
`

export const Notification = styled.div`
  position: relative;
  @media screen and (max-width: 767px) {
    position: absolute;
    right: 0;
  }
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

    height: 100vh;
    width: 6em;
    
    display: flex;
    flex-direction: column;
    gap: 50px;

    border-right: 1px solid ${({ theme }) => theme.colors.complementaryColor};



    ${Logo} {
      position: fixed;
      top: 40px;
      
      h2 { display: none }
    }
    ${Notification} { position: fixed; top: 130px; }

    ${Menu} {
      position: fixed;
      display: flex;
      flex-direction: column;
      gap: 50px;

      width: unset;
      box-shadow: none;

      ${Item} { padding: 0 }

    }

  }


`
