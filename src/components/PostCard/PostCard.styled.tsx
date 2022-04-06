import styled from 'styled-components'

export const Container = styled.div`
max-width: 700px;
  display: grid;
  justify-items: start;
  justify-content: center;
  gap: 10px;
  grid-template-columns: 140px 2fr 10px 4.5fr;
  grid-template-areas: 
    "img intro intro intro"
    "img author author author"
    "img footer footer footer"
    ". . . ."
    ". . . ."
    "line line line line"
  ;

  cursor: pointer;

  :hover {
    opacity: .8;
  }
`

export const Img = styled.img`
  grid-area: img;
  width: 140px;
  height: 140px;
`

export const Intro = styled.div`
  grid-area: intro;
  color: ${({ theme }) => theme.colors.onBackgroundColor};
`

export const Author = styled.div`
  grid-area: author;
  color: ${({ theme }) => theme.colors.onComplementaryColor};
  align-self: center;
  white-space: nowrap;
`

export const Category = styled.div`
  grid-area: category;
  color: #69BDFD;
  align-self: center;
`

export const Date = styled.div`
  grid-area: date;
  color: ${({ theme }) => theme.colors.onComplementaryColor};
  align-self: center;
`

export const Dot = styled.span`
  grid-area: dot;
  display: block;
  width: 5px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.onComplementaryColor};
  align-self: center;
  border-radius: 100px;
`

export const Line = styled.span`
  grid-area: line;
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.complementaryColor};
`

export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  gap: 20px
`
