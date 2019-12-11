import styled, { css } from 'styled-components';

const font = css`
  font-size: 30px;
  font-style: italic;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;

export const Container = styled.span`
  width: 100%;
  background: #EEE;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 3px 3px #0002;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  ${font}
  display: block;
`;

export const TextEdit = styled.input`
  ${font}
  border-width: 0;
  border-radius: 3px;
  background: #CCC;
  width: auto;
`;

export const Select = styled.select`
  ${font}
`;

export const SmallText = styled.div`
  font-size: 20px;
  display: block;
  color: #555;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  & + &{
    margin-left: 5px;
  }
`;

export const Button = styled.button`
  background: ${({ color }) => color};
  width: 50px;
  height: 50px;
  border-width: 0px;
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;
`;
