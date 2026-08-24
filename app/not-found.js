import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '6rem 24px', textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Page not found</h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" style={{ color: 'var(--accent)' }}>
        Back home
      </Link>
    </main>
  );
}
