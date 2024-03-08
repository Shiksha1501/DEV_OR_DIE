import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={ChatPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
