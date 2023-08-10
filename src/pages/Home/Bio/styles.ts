import styled from "styled-components";

export const BioConteiner = styled.section`
  display: flex;
  justify-content: center;

  padding-top: 50px;
  width: 100%;
  height: 100%;
`
export const BioBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
  background: ${(props) => props.theme['gray-700']};
  height: 350px;
  width: 310px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.11);

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 8px solid ${(props) => props.theme['green-300']};
    margin-top: -150px;
    box-shadow: 0 0 50px rgb(53, 182, 148);
  }

  .profile_name {
    margin-top: 5px;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    height: 50px;
    font-family: 'EB Garamond', serif;
  }

  .profile_desc {
    margin-top: 5px;
  }
`

export const IconConteiner = styled.div`
  margin-top: 40px;
  width: 80%;

  display: flex;
  justify-content: space-around;
`
