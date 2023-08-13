import styled from "styled-components";
import {BagSimple} from "phosphor-react";

export const PortifolioConteiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-800']};

  padding: 5px 65px;
  padding-top: 0;
`

export const PortifolioIcon = styled(BagSimple)`
  margin-top: 15px;
  color: ${(props) => props.theme['blue-300']};
`
export const PortifolioContent = styled.div`
  width: 100%;
  margin-bottom: 50px;
`

export const ContentTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`
export const ContentCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 25px;
`

export const ContentIten = styled.li`
  display: flex;
  position: relative;

  min-width: 32%;
  height: 250px;
  transform: skewX(-10deg);
  border-top-left-radius: 25px;
  border: 2px solid ${(props) => props.theme['green-700']};
  border-bottom: none;
  overflow: hidden;


  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.4rem;
    background-image: linear-gradient(90deg, ${(props) => props.theme['green-300']} 0%, ${(props) => props.theme['green-700']} 92.32%);
    bottom: -0.1rem;
    left: 0;
  }

  //Hover do elemento
  &:hover {
    transform: skewX(-10deg) scale(1.2);
    transition: 0.3s;
    z-index: 1;
    box-shadow: 0 0 50px rgb(53, 182, 148);

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


  img {
    width: 100%;
    height: auto;
  }


`

export const ContentItenDesc = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;


  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;

  font-size: 1.1rem;
  margin-bottom: 0;
  transition: background 0.3s;


  &:hover {
    background: transparent;

    h3, p {
      display: none;
      transition: 0.3s;
    }

  }

  h3 {
    text-align: center;
    color: ${(props) => props.theme['green-300']};
  }

  p {
    color: ${(props) => props.theme['gray-400']};
  }

`
