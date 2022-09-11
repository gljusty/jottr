import { MenuProps } from "./menu.types";
import { Group, ThemeIcon } from "@mantine/core";
import { TbCheck } from "react-icons/tb";

const JottrMenu: React.FC<Partial<MenuProps>> = () => {
  return (
    <Group
      spacing={"sm"}
      position={"center"}
      className={"animate__animated animate__fadeIn"}
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
  );
};

export default JottrMenu;
