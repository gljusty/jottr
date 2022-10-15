import { NoteProps, JNote } from "./note.types.js";
import { Paper, Textarea } from "@mantine/core";

const JottrNote = ({ text, placeholder }: Partial<NoteProps>): JNote => {
  return (
    <Paper sx={{ width: `100%`, height: `200px` }}>
      <Textarea value={text ? text : placeholder ? placeholder : ""} />
    </Paper>
  );
};

export default JottrNote;
