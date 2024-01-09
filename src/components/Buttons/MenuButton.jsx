import { useState } from 'react';

export const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`menuButtons z__3 ${isMenuOpen ? 'menuButtons--open' : ''}`} id="MenuButtons">
            <button className="menuButtons__item" id="OpenMenu" onClick={toggleMenu}>
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
    );
};