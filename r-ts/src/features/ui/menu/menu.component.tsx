import { MenuProps } from "./menu.types.js";
import {
  Center,
  Group,
  Paper,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { TbCheck } from "react-icons/tb";

const JottrMenu: React.FC<Partial<MenuProps>> = () => {
  const theme = useMantineTheme();
  return (
    <Center sx={{ backgroundColor: `whitesmoke`, padding: `2vh` }}>
      <Group
        spacing={"sm"}
        position={"center"}
        className={"animate__animated animate__fadeIn animate__slow"}
      >
        <ThemeIcon>
          <TbCheck size={14} />
        </ThemeIcon>
        <ThemeIcon>
          <TbCheck size={14} />
        </ThemeIcon>
        <ThemeIcon>
          <TbCheck size={14} />
        </ThemeIcon>
      </Group>
    </Center>
  );
};

export default JottrMenu;
