import { NoteProps } from "./note.types.js";
import { Paper, Textarea } from "@mantine/core";

const JottrNote = ({ text }: Partial<NoteProps>) => {
  return (
    <Paper sx={{ width: `100%`, height: `200px` }}>
      <Textarea value={text ? text : undefined} />
    </Paper>
  );
};

export default JottrNote;
