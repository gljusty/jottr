import { Button, MantineProvider } from "@mantine/core";
import Layout from "../features/layout/layout.component";
import "./App.styles.css";

function App() {
  return (
    <MantineProvider withGlobalStyles theme={{ colorScheme: "dark" }}>
      <Layout></Layout>
    </MantineProvider>
  );
}

export default App;
