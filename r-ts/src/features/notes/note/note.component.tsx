import { NoteProps } from "./note.types.js";
import { Paper, Textarea } from "@mantine/core";

const JottrNote: React.FC<Partial<NoteProps>> = ({}: Partial<NoteProps>) => {
  return (
    <Paper>
      <Textarea />
    </Paper>
  );
};

export default JottrNote;
