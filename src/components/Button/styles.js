import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 4px 4px 8px grey;
  margin: 8px;

  button {
    align-items: center;
    background: rgba(179, 161, 37, 0.6);
    border: 2px solid rgb(179, 161, 37);
    color: rgb(20, 20, 20);
    display: flex;
    font-size: 14px;
    font-family: 'Press Start 2P', cursive;
    height: 50px;
    min-width: 50px;
    padding: 12px;

    svg {
      font-size: 24px;
      margin: 0 4px;
    }
  }
`;
