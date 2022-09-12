import {
  JottrNote,
  JottrNoteProps,
} from "../../features/notes/note/note.types";

export const createNote: Function = (j?: JottrNoteProps): JottrNote | null => {
  let c: JottrNote | null = j ? j : null;
  return c;
};
