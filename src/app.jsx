import styles from "./app.module.css";
import React from "react";
import Login from "./component/login/login";
import Maker from "./component/maker/maker";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ authService, FileInput, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={
              <Maker
                cardRepository={cardRepository}
                FileInput={FileInput}
                authService={authService}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
