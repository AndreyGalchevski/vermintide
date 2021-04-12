import StyledFooter from './Footer.styled';

export default function Footer(): JSX.Element {
  const thisYear = new Date().getFullYear();
  const infoEmail = 'info@vermintide.band';
  return (
    <StyledFooter>
      <a href={`mailto: ${infoEmail}`}>{infoEmail}</a>
      <p>&copy;{thisYear} Vermintide</p>
    </StyledFooter>
  );
}
