import { MantineProvider } from "@mantine/core";
import { InitialState } from "./App.types";
import { useState } from "react";
import JottrShell from "../features/layout/shell/shell.component.js";
import "./App.styles.css";

function App({}: Partial<InitialState>) {
  return (
    <MantineProvider withGlobalStyles theme={{ colorScheme: "dark" }}>
      <JottrShell />
    </MantineProvider>
  );
}

export default App;
