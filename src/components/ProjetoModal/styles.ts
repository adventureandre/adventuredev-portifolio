import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: 75%;
  max-height: 100vh;
  border-radius: 7px;
  padding: 5px 10px;
  background: ${(props) => props.theme['gray-800']};
  box-shadow: 0 0 10px rgb(53, 182, 148);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2.5rem;
  animation: fade 1s;

  @media (max-width: 1280px) {
    overflow-y: auto;
    overflow-x: hidden;
    width: 95%;
  }
`

export const VideoConteiner = styled.div`
  width: 50%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: start;
    gap: 5px;

    a {
      width: fit-content;
      color: #F9F9F9;
      font-size: 1rem;
      padding: 5px 10px;
      background-image: linear-gradient(90deg, ${(props) => props.theme['green-500']} .2%, ${(props) => props.theme['green-700']} 100%);
      border-radius: 0.5rem;
      text-decoration: none;
      text-align: center;

    }
  }

  video {
    margin-top: 30px;
    margin-bottom: 10px;
    width: 100%;
    min-height: 300px;
    border-radius: 6px;

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }
`

export const ContentDesc = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  max-height: 95vh;

  @media (max-width: 1280px) {
    width: 100%;
  }
`

export const ContentTitle = styled(Dialog.Title)`
  display: block;
  text-align: center;
  color: ${(props) => props.theme['green-300']};
  margin-bottom: 10px;
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  box-shadow: 0 0 50px rgb(53, 182, 148);

`

export const DescricaoScrollable = styled.div`
  max-height: unset;
  overflow-y: unset;

  @media (max-width: 768px) {
    max-height: 200px;
    overflow-y: auto;

  }
`