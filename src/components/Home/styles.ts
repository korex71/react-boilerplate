import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #202020;
  color: white;
`;

export const ClickMeButton = styled.button`
  color: white;
  font-size: 25pt;
  font-weight: inherit;
  padding: 10px 20px;
  background-color: #250c0c;
  border-radius: 5px;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;

  &:hover {
    background: linear-gradient(90deg, #5c0a0a 0%, #250c0c 100%);
  }

  &:active {
    background: linear-gradient(90deg, rgb(73 6 6) 0%, rgb(13 4 4) 100%);
  }
`;

const PulseFade = keyframes`
  0% {
    background-color: #202020; /* cor inicial - clean */
  }
  50% {
    background-color: #000000; /* cor de transição - dark */
  }
  100% {
    background-color: #202020; /* cor final - clean */
  }
`;

export const WrapperPulse = styled.div`
  background-color: #202020; /* cor inicial - clean */
  animation: ${PulseFade} 3s infinite;
`;
