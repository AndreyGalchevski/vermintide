import styled from 'styled-components';

export const SoundsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
`;

export const SoundEmbed = styled.iframe`
  background-color: white;
  flex: 1 0 calc(33.33% - 10px);
  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
