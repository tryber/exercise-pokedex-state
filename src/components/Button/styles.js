import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-items: center;
  background: rgba(179, 161, 37, 0.6);
  border: 2px solid rgb(179, 161, 37);
  box-shadow: 4px 4px 8px grey;
  color: rgb(20, 20, 20);
  display: flex;
  font-family: 'Press Start 2P', cursive;
  font-size: 14px;
  height: 50px;
  margin: 8px;
  min-width: 50px;
  padding: 12px;
  transform: 0.2s;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background: rgb(128, 128, 128);
    border-color: rgb(20, 20, 20);
    cursor: not-allowed;
    opacity: 0.65;
  }

  svg {
    font-size: 24px;
    margin: 0 4px;
  }
`;
