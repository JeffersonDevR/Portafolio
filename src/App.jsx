import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { About, Experience, Hero, Navbar, StarsCanvas, AvatarSection } from "./components";

const App = () => {
    // Scroll to top on page load/reload and clear hash
    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(null, null, window.location.pathname);
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="relative">
                    <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center animate-float-bg z-0" />
                    <div className="relative z-10">
                        <Navbar />
                        <Hero />
                    </div>
                </div>
                <About />
                <Experience />
                <div className="relative z-0">
                    <AvatarSection />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
