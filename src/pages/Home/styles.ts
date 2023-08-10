import styled from "styled-components";
import BackgroundImg from '../../img/background-1.jpeg'

export const HomeConteinerBio = styled.section`
  height: 85vh;
  position: relative;

  ::before {
    content: '';
    background-image: url(${BackgroundImg});
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