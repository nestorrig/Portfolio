import { ThemeButton } from "../Buttons/ThemeButton";

const navLinks = [
  { label: "About me", link: "#About" },
  { label: "Skills", link: "#Skills" },
  { label: "Projects", link: "#Projects" },
  { label: "Contact", link: "#Contact" },
  { label: "CV", link: "./docs/Nestor Rios Garcia CV.pdf" },
];

export function Header() {
  return (
    <header className="header">
      <figure className="navBar__logo navBar__logo--desktop svg__logo">
        <img src="./logos/logo_letters.svg" alt="Logo" />
      </figure>
      <nav className="navBar navBar--desktop">
        {navLinks.map((link, index) => (
          <a key={index} className="navBar__item" href={link.link}>
            {link.label}
          </a>
        ))}
      </nav>
      <ThemeButton device="desktop" />
    </header>
  );
}
