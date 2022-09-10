import { LayoutProps } from "./layout.types";
import { Container } from "@mantine/core";
import { useEffect } from "react";

const Layout: React.FC<Partial<LayoutProps>> = ({
  children,
  maxHeight,
  maxWidth,
}: Partial<LayoutProps>) => {
  useEffect(() => {
    console.log(children);
  }, []);
  return (
    <Container sx={{ maxHeight: maxHeight, maxWidth: maxWidth }}>
      {children}
    </Container>
  );
};

export default Layout;
