import { HeaderProps } from "./header.types.js";
import {
  Header,
  ThemeIcon,
  Group,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import { TbCheck, TbBallon, TbBoxMultiple } from "react-icons/tb";

const JottrHeader = <T extends Partial<HeaderProps>>({}: T) => {
  const theme = useMantineTheme();
  return (
    <Header p={"md"} height={60}>
      <Group position={"apart"} spacing={"sm"}>
        <Group position={"center"} spacing={"xs"}>
          #Brand
          <TbBallon size={24} />
        </Group>
        <Group position={"center"} spacing={"sm"}>
          <TbCheck size={24} />

          <ActionIcon>
            <TbBoxMultiple />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default JottrHeader;
