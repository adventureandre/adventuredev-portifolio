import styled from "styled-components";
import {Info} from "phosphor-react";

export const AboutConteiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-800']};

  padding: 5px 65px 70px;
`
export const AboutIcon = styled(Info)`
  margin-top: 15px;
  color: ${(props) => props.theme['blue-300']};
`

export const AboutTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`
export const AboutDesc = styled.p`
  margin-top: 20px;
`

export const AboutDescDestaque = styled.strong`
  color: ${(props) => props.theme['green-700']};
`

export const Curriculo = styled.a`
  margin-top: 25px;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  border: 2px solid ${(props) => props.theme.white};
`