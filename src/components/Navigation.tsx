// components/Navigation.tsx
import React, { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/utils";
import { FrostButton } from "@/components/ui/helva-buttons";

type Lenis = {
    scrollTo: (
        target: Element | string | number,
        options?: {
            duration?: number;
            easing?: (t: number) => number;
            offset?: number;
        }
    ) => void;
};

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("what-is");
    const ticking = useRef(false);
    const activeRef = useRef(activeSection);
    const isClickScrolling = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // NUOVO: Effetto per bloccare lo scroll del body quando il menu è aperto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // Funzione di pulizia per ripristinare lo scroll se il componente viene smontato
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]); // Questo effetto si attiva ogni volta che 'menuOpen' cambia


    useEffect(() => {
        activeRef.current = activeSection;
    }, [activeSection]);

    useEffect(() => {
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        const id = hash?.replace("#", "");
        if (id && ["what-is", "use-cases", "partners", "roadmap"].includes(id)) {
            setActiveSection(id);
        }
    }, []);

    useEffect(() => {
        const ids = ["what-is", "use-cases", "partners", "roadmap"];
        const getHeaderHeight = () => document.querySelector("nav")?.clientHeight || 80;
        const getPageTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

        const computeActive = () => {
            if (isClickScrolling.current) return;
            const scrollPos = window.scrollY + getHeaderHeight() + 1;
            let next = ids[0];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && getPageTop(el) <= scrollPos) {
                    next = id;
                }
            }
            if (next !== activeRef.current) {
                setActiveSection(next);
                try {
                    window.history.replaceState(null, "", `#${next}`);
                } catch {}
            }
        };

        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    computeActive();
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        computeActive();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    const getHeaderHeight = () => document.querySelector("nav")?.clientHeight || 80;

    const handleScrollToSection = (id: string) => {
        setActiveSection(id);
        setMenuOpen(false);
        isClickScrolling.current = true;

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        const element = document.getElementById(id);
        if (element) {
            const header = getHeaderHeight();
            const lenis = (window as unknown as { lenis?: Lenis }).lenis;

            if (lenis) {
                lenis.scrollTo(element, {
                    duration: 1.5,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    offset: -header,
                });
            } else {
                const top = element.getBoundingClientRect().top + window.scrollY - header;
                window.scrollTo({ top, behavior: "smooth" });
            }
            try {
                window.history.pushState(null, "", `#${id}`);
            } catch {}
        }

        scrollTimeoutRef.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 1600);
    };

    const activeLinkStyle = "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full";
    const mobileActiveLinkStyle = "text-white after:absolute after:bottom-0 after:left-3 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full";

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
                <div className="container sm:px-10 lg:px-16">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img
                                src={withBase("uploads/logo.png")}
                                alt="Helva AI Agent"
                                className="w-28 object-contain"
                            />
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex space-x-4">
                            <FrostButton
                                variant="nav"
                                onClick={() => handleScrollToSection("what-is")}
                                className={`relative ${activeSection === "what-is" ? activeLinkStyle : ""}`}
                            >
                                What is
                            </FrostButton>
                            {/* ... altri link desktop ... */}
                            <FrostButton
                                variant="nav"
                                onClick={() => handleScrollToSection("use-cases")}
                                className={`relative ${activeSection === "use-cases" ? activeLinkStyle : ""}`}
                            >
                                Use-Cases
                            </FrostButton>
                            <FrostButton
                                variant="nav"
                                onClick={() => handleScrollToSection("partners")}
                                className={`relative ${activeSection === "partners" ? activeLinkStyle : ""}`}
                            >
                                Partners
                            </FrostButton>
                            <FrostButton
                                variant="nav"
                                onClick={() => handleScrollToSection("roadmap")}
                                className={`relative ${activeSection === "roadmap" ? activeLinkStyle : ""}`}
                            >
                                Roadmap
                            </FrostButton>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <a
                                href="https://form.typeform.com/to/CA2cRP6c"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FrostButton
                                    variant="secondary"
                                    className="text-sm font-medium font-roboto"
                                    showIcon={false}
                                >
                                    Let's Connect
                                </FrostButton>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                title={menuOpen ? "Close menu" : "Open menu"}
                                className="p-2 rounded-lg text-gray-200 hover:text-white transition-all duration-200"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={
                                            menuOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden">
                        <div className="px-6 py-4 space-y-3 bg-black/80">
                            {/* ... link mobile ... */}
                            <FrostButton
                                variant="nav"
                                className={`w-full justify-start text-left relative ${
                                    activeSection === "what-is" ? mobileActiveLinkStyle : ""
                                }`}
                                onClick={() => handleScrollToSection("what-is")}
                            >
                                What is
                            </FrostButton>
                            <FrostButton
                                variant="nav"
                                className={`w-full justify-start text-left relative ${
                                    activeSection === "use-cases" ? mobileActiveLinkStyle : ""
                                }`}
                                onClick={() => handleScrollToSection("use-cases")}
                            >
                                Use-Cases
                            </FrostButton>
                            <FrostButton
                                variant="nav"
                                className={`w-full justify-start text-left relative ${
                                    activeSection === "partners" ? mobileActiveLinkStyle : ""
                                }`}
                                onClick={() => handleScrollToSection("partners")}
                            >
                                Partners
                            </FrostButton>
                            <FrostButton
                                variant="nav"
                                className={`w-full justify-start text-left relative ${
                                    activeSection === "roadmap" ? mobileActiveLinkStyle : ""
                                }`}
                                onClick={() => handleScrollToSection("roadmap")}
                            >
                                Roadmap
                            </FrostButton>

                            <div className="pt-2">
                                <a
                                    href="https://form.typeform.com/to/CA2cRP6c"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FrostButton
                                        variant="secondary"
                                        className="w-full font-medium font-roboto"
                                        showIcon={false}
                                    >
                                        Let's Connect
                                    </FrostButton>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* NUOVO: Overlay per lo sfondo sfocato su mobile */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md md:hidden"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                ></div>
            )}
        </>
    );
};

export default Navigation;