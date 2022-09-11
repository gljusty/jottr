import { MenuProps } from "./menu.types.js";
import {
  Button,
  Center,
  Group,
  Paper,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

const JottrMenu: React.FC<Partial<MenuProps>> = () => {
  const [visible, toggleVisible] = useState<boolean>(true);
  const theme = useMantineTheme();
  return (
    <Paper
      radius={"md"}
      className={"animate__animated animate__fadeInUpBig animate__slower"}
      sx={{
        backgroundColor: theme ? theme.black : "gray",
        padding: `5px`,
        width: `fit-content`,
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <Group spacing={"sm"} position={"center"}>
        <Button
          compact
          onClick={() => {
            console.log("t");
          }}
        >
          test
        </Button>
        <Button
          compact
          onClick={() => {
            console.log("t");
          }}
        >
          test
        </Button>
        <Button
          compact
          onClick={() => {
            console.log("t");
          }}
        >
          test
        </Button>
      </Group>
    </Paper>
  );
};

export default JottrMenu;
