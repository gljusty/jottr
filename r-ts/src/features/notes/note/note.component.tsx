import { JottrNoteProps } from "./note.types.js";
import { Paper, Textarea } from "@mantine/core";

const JottrNote: React.FC<
  Partial<JottrNoteProps>
> = ({}: Partial<JottrNoteProps>) => {
  return (
    <Paper>
      <Textarea />
    </Paper>
  );
};

export default JottrNote;
