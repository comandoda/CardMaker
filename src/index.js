import React, { memo } from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth_service";
import firebaseApp from "./service/firebase";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./component/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <App
    cardRepository={cardRepository}
    authService={authService}
    FileInput={FileInput}
  />
);

reportWebVitals();
