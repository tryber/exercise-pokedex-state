import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  align-items: center;
  background: rgba(88, 129, 87, 0.8);
  border: 2px solid rgb(179, 161, 37);
  border-radius: 0 0 50% 50%;
  box-shadow: 4px 4px 8px grey;
  color: #e8c547;
  display: flex;
  font-family: 'Press Start 2P', cursive;
  font-size: 14px;
  height: 50px;
  margin: 8px;
  min-width: 50px;
  padding: 12px;
  transform: 0.2s;

  ${(props) => props.className === 'previous' && css`
    border-radius: 50% 0 0 50%;
  `}

  ${(props) => props.className === 'next' && css`
  border-radius: 0 50% 50% 0;
  `}

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
