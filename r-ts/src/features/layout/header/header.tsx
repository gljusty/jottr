import { JottrNavbarProps } from "./header.types";
import { Header, ThemeIcon, Group, useMantineTheme } from "@mantine/core";
import { TbCheck, TbBandage, TbBoxMultiple } from "react-icons/tb";

const Nav: React.FC<Partial<JottrNavbarProps>> = () => {
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
          <TbBandage size={22} />
        </ThemeIcon>
        <Group position={"center"} spacing={"sm"}>
          <ThemeIcon>
            <TbCheck size={22} />
          </ThemeIcon>
          <ThemeIcon>
            <TbBoxMultiple size={22} />
          </ThemeIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default Nav;
