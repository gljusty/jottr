import { LayoutProps } from "./shell.types.js";
import {
  AppShell,
  Center,
  Container,
  useMantineTheme,
  Stack,
} from "@mantine/core";
import { useEffect } from "react";
import JottrHeader from "../header/header.component.js";
import JottrMenu from "../../ui/menu/menu.component.js";
import "./shell.styles.css";

const JottrShell: React.FC<Partial<LayoutProps>> = ({
  children,
}: Partial<LayoutProps>) => {
  const theme = useMantineTheme();

  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <AppShell header={<JottrHeader />}>
      {children}
      <Center>
        <Stack>
          <Container
            size={"xl"}
            sx={{ border: `solid 2px blue`, width: `400px`, height: `400px` }}
          ></Container>
          <JottrMenu />
        </Stack>
      </Center>
    </AppShell>
  );
};

export default JottrShell;
