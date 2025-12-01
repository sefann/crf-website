import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Global error handler to catch and suppress browser extension errors
// This prevents form-filling extensions from breaking the app

// Override window.onerror for maximum compatibility
const originalOnError = window.onerror;
window.onerror = function(message, source, lineno, colno, error) {
  const errorStr = String(message || '');
  const sourceStr = String(source || '');
  
  // Suppress errors from browser extensions, VM scripts, or form-filling scripts
  if (
    errorStr.includes('fillThisForm') ||
    errorStr.includes('Cannot read properties of undefined') ||
    (errorStr.includes('reading') && errorStr.includes('undefined')) ||
    sourceStr.includes('extension') ||
    sourceStr.includes('chrome-extension') ||
    sourceStr.includes('moz-extension') ||
    sourceStr.includes('safari-extension') ||
    sourceStr.includes('VM') || // VM scripts are dynamically injected by extensions
    sourceStr === '' // Empty source often indicates injected code
  ) {
    // Silently suppress - return true to prevent default error handling
    return true;
  }
  
  // Call original handler if it exists
  if (originalOnError) {
    return originalOnError.call(this, message, source, lineno, colno, error);
  }
  
  return false;
};

// Add error event listener as backup
window.addEventListener('error', (event) => {
  const errorMessage = String(event.message || '');
  const errorFilename = String(event.filename || '');
  
  if (
    errorMessage.includes('fillThisForm') ||
    errorMessage.includes('Cannot read properties of undefined') ||
    (errorMessage.includes('reading') && errorMessage.includes('undefined')) ||
    errorFilename.includes('extension') ||
    errorFilename.includes('chrome-extension') ||
    errorFilename.includes('moz-extension') ||
    errorFilename.includes('safari-extension') ||
    errorFilename.includes('VM') ||
    errorFilename === ''
  ) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
  }
}, true); // Use capture phase to catch errors early

// Catch unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason?.message || event.reason?.toString() || String(event.reason || '');
  
  if (
    reason.includes('fillThisForm') ||
    reason.includes('Cannot read properties of undefined') ||
    (reason.includes('reading') && reason.includes('undefined'))
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
});

// Add a dummy fillThisForm function to prevent extension errors
// Some extensions look for this function on window or document
if (typeof (window as any).fillThisForm === 'undefined') {
  (window as any).fillThisForm = function() {
    // Dummy function - do nothing, return success
    return true;
  };
}

// Also add to document for some extensions
if (typeof (document as any).fillThisForm === 'undefined') {
  (document as any).fillThisForm = function() {
    return true;
  };
}

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
