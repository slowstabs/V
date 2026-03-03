import fs from 'fs';
import path from 'path';
// We will use gray-matter and remark to parse Markdown once the packages are installed
// import matter from 'gray-matter';
// import { remark } from 'remark';
// import html from 'remark-html';

const writeupsDirectory = path.join(process.cwd(), 'content/writeups');

export function getSortedWriteupsData() {
    // Stub logic for now
    try {
        const fileNames = fs.readdirSync(writeupsDirectory);
        const allWriteupsData = fileNames.map((fileName) => {
            const id = fileName.replace(/\.md$/, '');
            return {
                id,
                title: fileName,
                date: '2026-03-03',
                tags: ['Placeholder']
            };
        });
        return allWriteupsData.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (e) {
        return [];
    }
}

export function getAllWriteupIds() {
    try {
        const fileNames = fs.readdirSync(writeupsDirectory);
        return fileNames.map((fileName) => {
            return {
                params: {
                    slug: fileName.replace(/\.md$/, ''),
                },
            };
        });
    } catch (e) {
        return [];
    }
}

export async function getWriteupData(id: string) {
    // Stub for getting markdown data
    const fullPath = path.join(writeupsDirectory, `${id}.md`);
    let contentHtml = "<p>Loading markdown content module...</p>";

    if (fs.existsSync(fullPath)) {
        contentHtml = `<p>Found file for ${id}.md! (Awaiting remark parsing)</p>`;
    }

    return {
        id,
        contentHtml,
        title: `Writeup: ${id}`,
        date: '2026-03-03'
    };
}
