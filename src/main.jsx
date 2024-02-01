import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import RegisterForm from "./components/Form/Register.jsx";

import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <RegisterForm />
  </React.StrictMode>
);
