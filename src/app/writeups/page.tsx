import Link from 'next/link';
import { getSortedWriteupsData } from '@/lib/markdown';

export default function WriteupsPage() {
    const allWriteups = getSortedWriteupsData();

    return (
        <main>
            <h1>Writeups</h1>
            <p>A collection of technical documentation and post-exploitation analyses.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                {allWriteups.map(({ id, date, title, tags }) => (
                    <li key={id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                        <Link href={`/writeups/${id}`}>
                            <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{title}</h2>
                        </Link>
                        <div style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.5rem' }}>{date}</div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {tags?.map(tag => (
                                <span key={tag} style={{ background: 'var(--accent)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
