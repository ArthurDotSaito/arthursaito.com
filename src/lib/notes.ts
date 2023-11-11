import { join } from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';

interface NoteDetails {
  slug?: string;
  content?: string;
  [key: string]: string | undefined;
}

const notesDirectory = join(process.cwd(), 'notes');

const fetchNotesSlug = () => fs.readFileSync(notesDirectory);

const fetchNotesBySlug = (slug: string, fields = []) => {
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

export default fetchNotesBySlug;
