import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import { AdminProvider } from "./context/AdminContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppProvider>
            <AdminProvider>
                <App />
            </AdminProvider>
        </AppProvider>
    </BrowserRouter>
);
