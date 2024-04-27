import React from "react";
import ReactDOM from "react-dom/client";

import { MantineProvider } from "@mantine/core";

import App from "./App";
import "@mantine/core/styles.css";
import "reactflow/dist/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    theme={{
      primaryColor: "lime",
      fontFamily: "Inter, sans-serif",
      headings: {
        fontFamily: "Roboto Slab, sans-serif",
      },
    }}
  >
    <App />
  </MantineProvider>
);
