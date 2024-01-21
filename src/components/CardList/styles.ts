import  Marquee  from 'react-fast-marquee';
import styled from "styled-components";

export const ContentIten = styled.div`
  display: flex;
  position: relative;

  min-width: 350px;
  width: 30%;
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
      height: 0.4rem;
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


  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;

  font-size: 1.1rem;
  margin-bottom: 0;
  transition: background 0.3s;


  &:hover {
    background: transparent;

    h3, p, div {
      display: none;
      transition: 0.3s;
    }

  }

  h3 {
    text-align: center;
    color: ${(props) => props.theme['green-300']};
  }

  p {
    color: ${(props) => props.theme.white};
    margin-right: 5px;
  }
`

 export const ContainerMarqueee = styled(Marquee)`
  width: 50%;
  height: 100px;
  `

  export const ContainerIcon = styled.div`
  margin-right: 5px;
  height: 75px;
  overflow: hidden;
  text-align: center;

  img{
    width: 50px;
    
  }
  p{
  text-align: center;
  width: 100%;
  }
  `