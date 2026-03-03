import { getWriteupData, getAllWriteupIds } from '@/lib/markdown';

export default async function WriteupPost({ params }: { params: { slug: string } }) {
    const writeupData = await getWriteupData(params.slug);

    return (
        <main>
            <article>
                <h1 style={{ marginBottom: '0.5rem' }}>{writeupData.title}</h1>
                <div style={{ opacity: 0.6, marginBottom: '2rem' }}>{writeupData.date}</div>
                <div dangerouslySetInnerHTML={{ __html: writeupData.contentHtml }} style={{ lineHeight: '1.8' }} />
            </article>
        </main>
    );
}
