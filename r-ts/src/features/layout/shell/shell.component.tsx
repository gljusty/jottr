import { LayoutProps } from "./shell.types";
import { AppShell, Container } from "@mantine/core";
import { useEffect } from "react";
import JottrHeader from "../header/header";

const JottrShell: React.FC<Partial<LayoutProps>> = ({
  theme,
  children,
  maxHeight,
  maxWidth,
}: Partial<LayoutProps>) => {
  return <AppShell header={<JottrHeader />}>{children}</AppShell>;
};

export default JottrShell;
