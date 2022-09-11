import { HeaderProps } from "./header.types.js";
import { Header, ThemeIcon, Group, useMantineTheme } from "@mantine/core";
import { TbCheck, TbBandage, TbBoxMultiple } from "react-icons/tb";

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
        <ThemeIcon>
          <TbBandage size={24} />
        </ThemeIcon>
        <Group position={"center"} spacing={"sm"}>
          <ThemeIcon>
            <TbCheck size={24} />
          </ThemeIcon>
          <ThemeIcon>
            <TbBoxMultiple size={24} />
          </ThemeIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default JottrHeader;
