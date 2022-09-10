import { LayoutProps } from "./layout.types";
import { Container, Grid, Button } from "@mantine/core";

import JottrNote from "../notes/note.component";

const Layout: React.FC<Partial<LayoutProps>> = ({
  children,
  maxHeight,
  maxWidth,
}: Partial<LayoutProps>) => {
  return (
    <Container sx={{ maxHeight: maxHeight, maxWidth: maxWidth }}>
      <Grid columns={12}>
        <Grid.Col span={2}>
          <JottrNote />
        </Grid.Col>
        <Grid.Col span={10}>{children}</Grid.Col>
      </Grid>
    </Container>
  );
};

export default Layout;
