import { LayoutProps } from "./layout.types";
import { Container, Grid, Button } from "@mantine/core";
const Layout: React.FC<Partial<LayoutProps>> = ({
  children,
  maxHeight,
  maxWidth,
}: Partial<LayoutProps>) => {
  return (
    <Container sx={{ maxHeight: maxHeight, maxWidth: maxWidth }}>
      <Grid columns={12}>
        <Grid.Col span={4}>{children}</Grid.Col>
        <Grid.Col span={10}>
          <Button>Test</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Layout;
