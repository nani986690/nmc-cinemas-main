import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app/App.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster
      position="top-right"
      duration={4000}
      closeButton
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "nmc-toast",
          title: "nmc-toast__title",
          description: "nmc-toast__desc",
          closeButton: "nmc-toast__close",
        },
      }}
    />
    <App />
  </BrowserRouter>,
);
