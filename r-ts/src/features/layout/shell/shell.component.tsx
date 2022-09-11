import { LayoutProps } from "./shell.types.js";
import { AppShell, Container, useMantineTheme } from "@mantine/core";
import { useEffect } from "react";
import JottrHeader from "../header/header.component.js";
import JottrMenu from "../../ui/menu/menu.component.js";
import "./shell.styles.css";

const JottrShell: React.FC<Partial<LayoutProps>> = ({
  children,
  maxHeight,
  maxWidth,
}: Partial<LayoutProps>) => {
  return (
    <AppShell
      header={<JottrHeader />}
      footer={<JottrMenu />}
      className={"_shell"}
    >
      {children}
    </AppShell>
  );
};

export default JottrShell;
