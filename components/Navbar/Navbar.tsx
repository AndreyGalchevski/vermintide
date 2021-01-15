import Link from 'next/link';

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/songs">
        <a>Songs</a>
      </Link>

      <Link href="/lyrics">
        <a>Lyrics</a>
      </Link>

      <Link href="/events">
        <a>Events</a>
      </Link>
    </nav>
  );
}
