import { LayoutProps } from "./shell.types";
import { AppShell, Container } from "@mantine/core";
import { useEffect } from "react";
import Nav from "../header/header";

const JottrShell: React.FC<Partial<LayoutProps>> = ({
  theme,
  children,
  maxHeight,
  maxWidth,
}: Partial<LayoutProps>) => {
  return <AppShell header={<Nav />}>{children}</AppShell>;
};

export default JottrShell;
