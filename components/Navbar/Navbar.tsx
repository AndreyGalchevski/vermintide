import Link from 'next/link';

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <Link href="/sounds">
        <a>Sounds</a>
      </Link>

      <Link href="/words">
        <a>Words</a>
      </Link>

      <Link href="/meanings">
        <a>Meanings</a>
      </Link>

      <Link href="/events">
        <a>Events</a>
      </Link>
    </nav>
  );
}
