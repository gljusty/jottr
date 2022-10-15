import { MenuProps } from "./menu.types.js";
import { Button, Center, Group, Paper, useMantineTheme } from "@mantine/core";
import { TbPlus, TbClipboard, TbBook2 } from "react-icons/tb";
import { useState } from "react";

const JottrMenu: React.FC<Partial<MenuProps>> = () => {
  const [visible, toggleVisible] = useState<boolean>(true);
  const theme = useMantineTheme();
  return (
    <Center>
      <Paper
        radius={"md"}
        className={"animate__animated animate__fadeInUpBig animate__slower"}
        sx={{
          backgroundColor: theme ? theme.black : "gray",
          padding: `5px`,
          width: `fit-content`,
          visibility: visible ? "visible" : "hidden",
          position: "sticky",
        }}
      >
        <Group spacing={"sm"} position={"center"}>
          <Button
            compact
            onClick={() => {
              console.log("t");
            }}
          >
            <TbPlus />
          </Button>
          <Button
            compact
            onClick={() => {
              console.log("t");
            }}
          >
            <TbClipboard />
          </Button>
          <Button
            compact
            onClick={() => {
              console.log("t");
            }}
          >
            <TbBook2 />
          </Button>
        </Group>
      </Paper>
    </Center>
  );
};

export default JottrMenu;
