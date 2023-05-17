import React from "react";
import logo from "./logo.svg";
import AppToast from "./common/components/AppToast";
import { AppStateProvider } from "./common/appData/AppState";
import AppNavigate from "./common/routes/AppNavigate";
import PreloaderBackdrop from "./common/components/PreloaderBackdrop";

function App() {
  return (
    <div className="App">
      <AppToast />
      <AppStateProvider>
        <AppNavigate />
        <PreloaderBackdrop />
      </AppStateProvider>
    </div>
  );
}

export default App;
