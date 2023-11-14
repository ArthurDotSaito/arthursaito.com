import { join } from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { setupShiki, remarkShiki } from './shikiSyntax';

interface NoteDetails {
  slug?: string;
  content?: string;
  date?: string;
  [key: string]: string | undefined;
}

const notesDirectory = join(process.cwd(), 'notes');

const fetchNotesSlug = () => fs.readdirSync(notesDirectory);

const fetchNotesBySlug = (slug: string, fields: string[] = []) => {
  const noteSlug = slug.replace(/\.md$/, '');
  const notePath = join(notesDirectory, `${noteSlug}.md`);
  const fileContent = fs.readFileSync(notePath, 'utf-8');
  const { data, content } = grayMatter(fileContent);

  const noteDetails: NoteDetails = {};

  fields.forEach((field) => {
    if (field === 'slug') noteDetails[field] = noteSlug;
    if (field === 'content') noteDetails[field] = content;
    if (data[field]) noteDetails[field] = data[field];
  });
  return noteDetails;
};

const fetchAllNotes = (fields: string[] = []) => {
  const slugs = fetchNotesSlug();
  const notes = slugs
    .map((slug) => fetchNotesBySlug(slug, fields))
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return a.date < b.date ? -1 : 1;
    });

  return notes;
};

const mdToHtml = async (md: string) => {
  await setupShiki();
  const processedResult = await remark().use(remarkHtml, { sanitize: false }).use(remarkShiki).process(md);

  return processedResult.toString();
};

export { fetchNotesBySlug, fetchAllNotes, mdToHtml };
