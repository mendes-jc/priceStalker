import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border-radius: 2px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  * + * {
    margin-top: 10px;
  }
`;
