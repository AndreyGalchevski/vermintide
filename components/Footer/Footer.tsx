import StyledFooter from './Footer.styled';

export default function Footer(): JSX.Element {
  const thisYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>&copy;{thisYear} Vermintide</p>
    </StyledFooter>
  );
}
