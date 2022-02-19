import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3vh;
  background-color: ${({ theme }) => theme.primaryLight};
  color: black;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default StyledFooter;
