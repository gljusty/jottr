import { Grid, MantineProvider } from "@mantine/core";
import "./App.styles.css";
import "animate.css";

import JottrShell from "../features/layout/shell/shell.component";

function App() {
  return (
    <MantineProvider withGlobalStyles theme={{ colorScheme: "dark" }}>
      <JottrShell></JottrShell>
    </MantineProvider>
  );
}

export default App;
