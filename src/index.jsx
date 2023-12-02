import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./routes/Main";
import CalendarForm from "./routes/CalendarForm";
import Final from './routes/Final';

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/calendar", element: <CalendarForm /> },
  { path: "/final", element: <Final /> },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
