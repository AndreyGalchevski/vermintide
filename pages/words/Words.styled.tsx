import styled from 'styled-components';

const WordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
  justify-content: center;
`;

export default WordsContainer;

export const WordCard = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  background-color: ${({ theme }) => theme.primaryDark};
  max-width: 500px;
  flex: 1 0 calc(50% - 10px);
  flex-direction: column;
  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 100%;
  }
`;

export const Content = styled.pre`
  margin: 0;
  font-family: 'Helvetica', sans-serif;
`;
