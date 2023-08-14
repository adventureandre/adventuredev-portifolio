import styled from "styled-components";
import {PhoneCall} from "phosphor-react";

export const ContatosConteiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-900']};

  padding: 5px 65px;
  width: 100%;
  height: 100vh;
  padding-top: 0;
`

export const ContatosIcon = styled(PhoneCall)`
  margin-top: 15px;
  color: ${(props) => props.theme['blue-300']};
`

export const ContatosContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  height: 70vh;
  margin-bottom: 50px;
`

export const ContatoBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  .icon {
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['green-300']};
    width: 100px;
    height: 100px;
    padding: 15px;
    border-radius: 50%;
    margin-bottom: 20px;

    &:hover {
      transform: scale(1.2);
      transition: 0.3s;
      z-index: 1;
      box-shadow: 0 0 50px rgb(53, 182, 148);
    }
  }

  h3 {
    margin-bottom: 5px;
    font-size: 1.5rem;
    color: #fff;
  }

  p {
    color: ${(props) => props.theme['gray-400']};
  }
`