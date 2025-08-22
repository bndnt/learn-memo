import ReactDOM from "react-dom/client";
import { UserProvider } from "./userContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
// const initialUserValue = {
//   username: "Mango",
//   isLoggedIn: true,
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
