/* eslint-disable react/prop-types */

// icons
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
    </svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
        <circle cx="4.983" cy="5.009" r="2.188"></circle>
        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
    </svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
        <path d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"></path>
    </svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
        <path  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
    </svg>
);
const PlatziIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
        <path d="M10.64 1.127L2.485 9.282a3.842 3.842 0 0 0 0 5.436l8.155 8.155a3.842 3.842 0 0 0 5.436 0l2.72-2.718l-2.72-2.718l-2.718 2.718L5.203 12l8.155-8.155l5.437 5.437l-5.437 5.436l2.718 2.72L21.513 12a3.842 3.842 0 0 0 0-5.437l-5.448-5.436a3.828 3.828 0 0 0-5.425 0z"></path>
    </svg>
);

// Array to centralize the social links
const socialLinks = [
    { href: 'https://github.com/nestorrig', Icon: GithubIcon },
    { href: 'https://www.linkedin.com/in/nestorrig', Icon: LinkedInIcon },
    { href: 'https://twitter.com/nestorrig', Icon: TwitterIcon },
    { href: 'https://www.facebook.com/nestorrig', Icon: FacebookIcon },
    { href: 'https://platzi.com/p/nestorrig/', Icon: PlatziIcon },
];

// if visibleTop is inactive, the footer won't be visible
export function Footer({ visibleTop = "" }) {
    return (
        <footer className="footer z__1" id="Contact">
            <div className={`footer__1 bg__1 ${visibleTop}`}>
                
            </div>
            <div className="footer__2 bg__3">
                <div className="footer__list center">
                    <figure className="footer__list__logo svg__logo">
                        <img src="./src/assets/logos/logo_name.svg" alt="Logo" />
                    </figure>
                    <nav className="footer__list__social">
                    {socialLinks.map(({ href, Icon }) => (
                        <div key={href}>
                            <a target="_blank" rel="noopener noreferrer" href={href}>
                            <Icon />
                            </a>
                        </div>
                    ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}