import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import PreLoader from "./components/preloader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader />

    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);