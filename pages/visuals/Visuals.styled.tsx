import styled from 'styled-components';

const VisualsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
`;

export default VisualsContainer;

export const VisualEmbed = styled.iframe`
  background-color: white;
  flex: 1 0 calc(50% - 10px);
  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
