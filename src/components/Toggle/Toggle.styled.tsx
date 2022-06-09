import styled from 'styled-components'

export const Container = styled.label`
  position: relative;
`

export const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {

    &:before {
      left: 17px;
    }
  }
`

export const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 35px;
  height: 20px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.onComplementaryColor};
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 45px;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors.onAccentColor};;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
`
