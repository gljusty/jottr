import { Button, Grid, MantineProvider, Stack } from "@mantine/core";
import "./App.styles.css";

import JottrShell from "../features/layout/shell/shell.component.js";

function App() {
  return (
    <MantineProvider withGlobalStyles theme={{ colorScheme: "dark" }}>
      <JottrShell />
    </MantineProvider>
  );
}

export default App;
