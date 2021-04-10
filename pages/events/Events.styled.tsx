import styled from 'styled-components';

const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
`;

export default EventsContainer;

export const EventImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
`;

export const EventCard = styled.div`
  background-color: red;
  flex: 1 0 calc(50% - 10px);
  flex-direction: column;
  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
