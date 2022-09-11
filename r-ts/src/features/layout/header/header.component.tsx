import { HeaderProps } from "./header.types.js";
import {
  Header,
  ThemeIcon,
  Group,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import { TbCheck, TbBallon, TbBoxMultiple } from "react-icons/tb";

const JottrHeader: React.FC<Partial<HeaderProps>> = () => {
  const theme = useMantineTheme();
  return (
    <Header
      sx={{
        padding: theme.spacing.md,
        background:
          theme.colorScheme == "dark"
            ? `linear-gradient(${theme.black[10]} 0%, whitesmoke 100%)`
            : "gray",
      }}
      height={60}
    >
      <Group position={"apart"} spacing={"sm"}>
        <TbBallon size={24} />
        <Group position={"center"} spacing={"sm"}>
          <ThemeIcon>
            <TbCheck size={24} />
          </ThemeIcon>
          <ActionIcon>
            <TbBoxMultiple />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default JottrHeader;
