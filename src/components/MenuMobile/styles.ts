import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";


export const Content = styled(DropdownMenu.Content)`
  min-width: 100vw;
  min-height: 75vh;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px ${(props) => props.theme['green-700']}, 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MenuItem = styled(DropdownMenu.Item)`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: ${(props) => props.theme['green-300']};
  border-radius: 3px;
  user-select: none;
  outline: none;
  margin-bottom: 20px;
  padding: 5px 10px;

  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.2);
  }

  a {
    width: 100%;
    height: 100%;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }
`