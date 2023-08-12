import styled from "styled-components";
import {Sliders} from "phosphor-react";

export const SkillsConteiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-900']};

  padding: 5px 65px;
  padding-top: 0;
`

export const SkillIcon = styled(Sliders)`
  margin-top: 15px;
  color: ${(props) => props.theme['blue-300']};
`

export const Cards = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 150px;
`
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: skewX(-10deg);
  border-top-right-radius: 20px;


  background: ${(props) => props.theme['gray-700']};
  min-width: 120px;
  min-height: 120px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-image: linear-gradient(90deg, ${(props) => props.theme['green-300']} 0%, ${(props) => props.theme['green-700']} 92.32%);
    bottom: -0.1rem;
    left: 0;
  }

  &:hover {
    transform: skewX(-10deg) scale(1.1);
    transition: 0.2s;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background-image: linear-gradient(90deg, ${(props) => props.theme['green-700']} 0%, ${(props) => props.theme['green-300']} 92.32%);
      bottom: -0.1rem;
      left: 0;
    }
  }

  span {
    margin-bottom: 4px;
    color: ${(props) => props.theme['green-300']};
  }
`