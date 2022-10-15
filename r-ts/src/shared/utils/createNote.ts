import { JottrNote, NoteProps } from "../../features/notes/note/note.types";

export const createNote = (
  j?: Partial<NoteProps>
): JottrNote<typeof j> | null => {
  let c: JottrNote<typeof j> | null = j ? j : null;
  return c;
};
