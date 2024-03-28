import { useEffect, useState } from "react";
import { ThemeButton } from "../Buttons/ThemeButton";

export function Menu () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const mobileMenuStyle = { transform: isMenuOpen ? 'translateX(0)' : 'translateX(-70vw)' };

    useEffect(() => {
        const main = document.querySelector('main');
        const navItems = document.getElementsByClassName('navBar__item');
        isMenuOpen ? main.classList.add("brightness") : main.classList.remove("brightness");

        const closeMenu = () => {
            setIsMenuOpen(false);
        };
        for (const item of navItems) {
            item.addEventListener('click', closeMenu);
        }
        main.addEventListener('click', closeMenu);

        return () => {
            for (const item of navItems) {
                item.removeEventListener('click', closeMenu);
            }
            main.removeEventListener('click', closeMenu);
        };
    }, [isMenuOpen]);

    return (
        <>
        <div style={mobileMenuStyle} className="menu z__3" id="MobileMenu">
            <nav className="navBar navBar--mobile">
                <figure className="navBar__logo navBar__logo--mobile svg__logo">
                    <img src="./src/assets/logos/logo_full.svg" alt="Logo"/>
                </figure>
                <a className="navBar__item navBar__item--mobile" href="#About">About me</a>
                <a className="navBar__item navBar__item--mobile" href="#Skills">Skills</a>
                <a className="navBar__item navBar__item--mobile" href="#Projects">Projects</a>
                <a className="navBar__item navBar__item--mobile" href="#Contact">Contact</a>
                <a className="navBar__item containCV" href="./src/assets/docs/Nestor_Rios_Garcia-CV.pdf">
                    <p>CV</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="#fcfcfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></path>
                    </svg>
                </a>
            </nav>
            <ThemeButton
                device="mobile"
            />
        </div>
        <div className="menuButtons z__3" id="MenuButtons">
            <button className={`menuButtons__item ${isMenuOpen ? 'inactive' : ''}`} id="OpenMenu" onClick={toggleMenu}>
                <svg className="menuButtons__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
                    <path d="M16.4 9H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1z"></path>
                </svg>
            </button>
            <button className={`menuButtons__item ${isMenuOpen ? '' : 'inactive'}`} id="CloseMenu" onClick={toggleMenu}>
                <svg className="menuButtons__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                    <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"></path>
                </svg>
            </button>
        </div>
        </>
    )
}