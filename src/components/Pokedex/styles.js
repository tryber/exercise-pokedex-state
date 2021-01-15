import styled from 'styled-components';

export const GameBoy = styled.div`
  background: rgb(218, 0, 0);
  border-color: darkred;
  border-radius: 24px 24px 30% 30%;
  border-width: 0 8px 8px 0;
  border-style: solid;
  box-shadow: inset 2px 2px 4px white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  padding: 30px 20px 20px 40px;
  width: 80%;

  @media (max-width: 768px) {
    border: 0;
    border-radius: 0;
    box-shadow: 0 0;
    width: 100%;
    height: 100vh;
  }
`;

export const Header = styled.div`
  align-items: center;
  background: rgba(204, 0, 0, 0.8);
  color: #FFDE00;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  position: absolute;
  -webkit-text-stroke: 1px #3B4CCA;
  top: 0;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PokedexStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 10px;
`;
