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
  min-width: 30rem;
  width: 75%;
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


`

export const VideoConteiner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 30rem;

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
    }
  }

  iframe {
    width: 500px;
    min-height: 300px;

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
  color: ${(props) => props.theme['gray-500']};
`