import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2pt solid white;
  background: white;
  padding: 1em;
  border-radius: 8px;
  color: #002fb7;
  div.info {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;
