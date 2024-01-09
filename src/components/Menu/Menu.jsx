import { ThemeButton } from "../Buttons/ThemeButton";

export function Menu () {
    return (
        <div className="menu z__3" id="MobileMenu">
            <nav className="navBar navBar--mobile">
                <figure className="navBar__logo navBar__logo--mobile svg__logo">
                    <img src="./src/assets/logos/logo_full.svg" alt="Logo"/>
                </figure>
                <a className="navBar__item navBar__item--mobile" href="#About">About me</a>
                <a className="navBar__item navBar__item--mobile" href="#Skills">Skills</a>
                <a className="navBar__item navBar__item--mobile" href="#Projects">Projects</a>
                <a className="navBar__item navBar__item--mobile" href="#Contact">Contact</a>
                <a className="navBar__item containCV" href="./src/assets/docs/Nesto_Rios_Garcia-CV.pdf">
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
    )
}