import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border: 1px gray solid;
  border-radius: 10px;
  display: flex;
  flex: 1 1 auto;
  height: 120px;
  justify-content: space-around;
  line-height: 1.5;
  max-width: 768px;
  min-width: 25%;
  margin: 10px 10px;

  p {
    color: rgb(20, 20, 20);
    font-size: 16px;
    font-weight: 500;
  }

  div {
    background: rgba(255, 165, 0, 0.4);
    border-radius: 50%;
    box-shadow: inset 6px 6px 8px grey;
  }
`;
