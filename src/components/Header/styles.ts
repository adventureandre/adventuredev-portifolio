import styled from "styled-components";
import {List} from "phosphor-react";

export const HeaderConteiner = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  min-height: 50px;
  font-family: 'Poppins', sans-serif;
`

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme['green-300']};
  font-weight: bold;
  font-size: 1.5rem;
  min-width: 130px;
`

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 400px;

  ul {
    display: flex;
    justify-content: space-between;
    gap: 5px;

    list-style: none;
    width: 100%;
  }

  li {
    font-weight: 600;
    font-size: 0.875rem;

    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme['green-300']};
      }
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`

export const MenuIcon = styled(List)`
  display: none;
  margin-right: -30px;
  @media (max-width: 780px) {
    display: block;
  }

`