import { breakpoints } from '@/design-system/breakpoints'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import styled from 'styled-components'

export const NewsLayout = styled(DefaultLayout)`
  overflow: unset;

  header {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.backgroundColor}; // ${props => props.theme.colors.backgroundColor};
  }

  main {
    // padding: 0;
  }

`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  width: 100%;
  // margin-bottom: 80px;
  @media screen and (${breakpoints.tablet}) {
    // gap: 20px;
  }
`

export const Banner = styled.div`
  width: 100%;
  max-height: 200px;
  height: 100%;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  @media screen and (${breakpoints.tablet}) {
    max-height: 250px;
  }
`

export const Details = styled.section`
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr;

  grid-template-areas: 
    "author"
    "actions"
  ;

  @media screen and (${breakpoints.tablet}) {
    gap: 20px;
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas: 
      "author actions"
    ;
  }
`

export const Author = styled.div`
  grid-area: author;
  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr; 
  column-gap: 10px;

  grid-template-areas:
    "picture name date"
  ;

  img {
    grid-area: picture;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-areas: 
      "picture name"
      "picture date"
    ;
  }
`

export const Actions = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  justify-self: flex-start;

  @media screen and (${breakpoints.tablet}) {
    justify-self: flex-end;
  }
`

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
