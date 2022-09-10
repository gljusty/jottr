import { MantineProvider } from "@mantine/core";
import Layout from "../features/ui/layout/layout";
import "./App.css";

function App() {
  return (
    <MantineProvider withGlobalStyles theme={{ colorScheme: "dark" }}>
      <Layout maxHeight={`100vh`} maxWidth={`100vw`}></Layout>
    </MantineProvider>
  );
}

export default App;
