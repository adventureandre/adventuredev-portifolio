import styled from "styled-components";

export const HeaderConteiner = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  font-family: 'Poppins', sans-serif;
  padding: 5px 60px;
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

    &:hover {
      color: ${(props) => props.theme['green-300']};
    }
  }
`