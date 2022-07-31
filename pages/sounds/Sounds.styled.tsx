import styled from 'styled-components';

const SoundsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
`;

export default SoundsContainer;

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlbumRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
  }
`;

export const AlbumImage = styled.img`
  width: 330px;
  height: 330px;
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 467px;
    height: 467px;
    margin-right: 10px;
  }
`;

export const AlbumIFrame = styled.iframe`
  width: 330px;
  height: 330px;
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 467px;
    height: 467px;
  }
`;

export const PurchaseButton = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  padding: 16px 26px;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;
