import styles from "./app.module.css";
import React from "react";
import Login from "./component/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maker from "./maker/maker";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />}></Route>
          <Route
            path="/maker"
            element={<Maker authService={authService} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
