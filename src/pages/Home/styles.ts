import styled from "styled-components";

import Background from '../../assets/background-1.jpeg';

import { Minus } from "phosphor-react";

export const HomeConteinerBio = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  position: relative;
  padding: 5px 65px;

  ::before {
    content: '';
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.05;
    z-index: -1;
  }
`

export const IconMinus = styled(Minus)`
  margin-top: -40px;
`

export const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`
