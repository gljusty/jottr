import { Grid, MantineProvider } from "@mantine/core";
import "./App.styles.css";
import "animate.css";

import JottrShell from "../features/layout/shell/shell.component.js";
//import JottrMenu from "../features/ui/menu/menu.component.js";

function App() {
  return (
    <MantineProvider withGlobalStyles theme={{ colorScheme: "dark" }}>
      <JottrShell maxHeight={`200px`}>test</JottrShell>
    </MantineProvider>
  );
}

export default App;
