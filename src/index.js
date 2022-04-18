import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth_service";
import firebaseApp from "./service/firebase";

const authService = new AuthService(firebaseApp);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App authService={authService} />);

reportWebVitals();
