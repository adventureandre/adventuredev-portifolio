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
export const PortifolioDestaque = styled.div`
  background: red;
`
