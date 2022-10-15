import { JottrNote, NoteProps } from "../../features/notes/note/note.types";

export const createNote = (j?: Partial<NoteProps>): JottrNote | null => {
  let c: JottrNote | null = j ? j : null;
  return c;
};
