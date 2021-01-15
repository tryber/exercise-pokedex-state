import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: #FFF;
  border: 1px gray solid;
  border-radius: 10px;
  box-shadow: inset 1px 1px 6px black;
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
    text-align: start;
  }

  img {
    width: 120px;
  }
`;
