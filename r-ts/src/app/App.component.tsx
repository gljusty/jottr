import { MantineProvider, Button, Stack } from "@mantine/core";
import Layout from "../features/layout/layout.component";
import "./App.styles.css";

function App() {
  return (
    <MantineProvider withGlobalStyles theme={{ colorScheme: "dark" }}>
      <Layout maxHeight={`100vh`} maxWidth={`100vw`}></Layout>
    </MantineProvider>
  );
}

export default App;
