import { StyledCard, CardTitle, CardSubtitle } from './Card.styled';

interface Props {
  title: string;
  subtitle: string;
  onClick: () => void;
}

export default function Card({ title, subtitle, onClick }: Props): JSX.Element {
  return (
    <StyledCard onClick={onClick} role="button" onKeyPress={onClick} tabIndex={0}>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </StyledCard>
  );
}
