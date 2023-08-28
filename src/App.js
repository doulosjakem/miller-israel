import "./styles.css";
import "./colors.css";
import TopNav from "./components/TopNav.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Spiders from "./pages/Spiders";
// import About from "./pages/About";
// import Give from "./pages/Give";
import NotFound from "./components/NotFound";
import BotFooter from "./components/BotFooter";

export default function App() {
  return (
    <div className="App m-0 p-0">
      <BrowserRouter>
        <TopNav />
        <div className="container-fluid bg-dark text-light ralewaytxt minpageheight">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="spiders" element={<Spiders />} />
            <Route path="about" element={<About />} />
            <Route path="give" element={<Give />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <BotFooter />
      </BrowserRouter>
    </div>
  );
}
