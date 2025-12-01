import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return null;
}

createRoot(document.getElementById("app")!).render(
    <StrictMode>
        <BrowserRouter>
            <AOSInit />
            <App />
        </BrowserRouter>
    </StrictMode>
);
