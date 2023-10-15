import styled from "styled-components";
import {BagSimple} from "phosphor-react";

export const PortifolioConteiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-800']};

  width: 100%;
  padding: 0 65px 5px;
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
  width: 100%;
`


