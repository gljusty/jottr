import { MantineTheme } from "@mantine/core";

export interface LayoutProps {
  maxHeight: string | number;
  maxWidth: string | number;
  children: React.ReactNode;
  theme: MantineTheme | null;
}
