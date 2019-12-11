import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
`;

export const Header = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  align-items: baseline;

  span {
    font-size: 40px;
    font-weight: bolder;
    color: #f5af02;
  }

  h2 {
    color: #FFF;
    font-style: italic;
  }
`;

export const Text = styled.span`
  color: #000;
  font-size: 23px;
`;
