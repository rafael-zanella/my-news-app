import styled from 'styled-components'

interface IProps {
  visible: boolean
}

export const ScrollBackToTopButton = styled.div<IProps>`
  display: ${({ visible }) => visible ? 'block' : 'none'};
  z-index: 99;
  position: sticky;
  bottom: 80px;
  right: 0;
  align-self: flex-end;
  margin-top: 20px;
  cursor: pointer;

  :hover{
    opacity: .8;
  }
`
