import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MarkdownPreviewer from "./App";


const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <MarkdownPreviewer />
    </StrictMode>
)
