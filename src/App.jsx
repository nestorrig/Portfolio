import { Header } from "./components/Header/Header"
import { Menu } from "./components/Menu/Menu"
import { Footer } from "./components/Footer/Footer"
import { MenuButton } from "./components/Buttons/MenuButton"
import { Project } from "./components/Project/Project"

function App() {

    return (
    <>
        <MenuButton/>
        <Menu/>
        <Header/>

        <main>
            <section className="about" id="About">
                <div className="center">
                    <figure className="about__imgContainer">
                        <img className="about__img" src="./src/assets/imgs/me.png" alt=""/>
                    </figure>
                    <article className="about__info">
                        <h2 className="about__subtitle">
                            Hello Im Nestor
                        </h2>
                        <h1 className="about__title">
                            Front end Developer
                        </h1>
                        <p className="about__parraf">
                            Ive held a lifelong fascination with the realm of science and technology. This passion guided me to explore the domain of software and its various specializations. What drew me particularly to Front-End development was the harmonious blend it offers between design aesthetics and functionality.
                        </p>
                        <button className="button" type="button">
                            <a href="mailto:contacto@nestorriosgarcia.com">Send me an email</a>
                        </button>
                    </article>
                </div>
            </section>

            <section className="skills" id="Skills">
                <div className="skills__background z__1">
                    <div className="bg__2"></div>
                    <div className="bg__1"></div>
                </div>
                <div className="skills__roles center z__2">
                    <article className="skills__roles__item bg__3 ">
                        <figure>
                            <img src="./src/assets/svgs/roles_ux-ui.svg" alt=""/>
                        </figure>
                        <div className="roles__text">
                            <h2>
                                Animation Developer
                            </h2>
                            <p>
                                My focus lies in producing visual effects, animations, and transitions that elevate the user experience, making the interface more captivating and dynamic.
                            </p>
                        </div>
                    </article>
                    <article className="skills__roles__item bg__3">
                        <figure>
                            <img src="/src/assets/svgs/roles_programming.svg" alt=""/>
                        </figure>
                        <div className="roles__text">
                            <h2>
                                General Front end Developer
                            </h2>
                            <p>
                                This role involves a broad array of responsibilities, from implementing designs and crafting visual components to overseeing user interaction and collaborating with the backend.
                            </p>
                        </div>
                    </article>
                    <article className="skills__roles__item bg__3">
                        <figure>
                            <img src="/src/assets/svgs/roles_responsive.svg" alt=""/>
                        </figure>
                        <div className="roles__text">
                            <h2>
                                Responsive Developer
                            </h2>
                            <p>
                                I specialize in creating designs that seamlessly adjust to various screen sizes, guaranteeing that the application appears and operates smoothly across mobile devices, tablets, and desktop computers.
                            </p>
                        </div>
                    </article>
                </div>
                <div className="skills__experience center z__2">
                    <div className="skills__experience__item __years">
                        <span>
                            2
                        </span>
                        <h2>Years Experience</h2>
                    </div>
                    <div className="skills__experience__item bg__3">
                        <span>
                            3+
                        </span>
                        <p>Clients</p>
                    </div>
                    <div className="skills__experience__item bg__3">
                        <span>
                            10+
                        </span>
                        <p>Projects</p>
                    </div>
                    <div className="skills__experience__item bg__3">
                        <span>
                            5+
                        </span>
                        <p>Skills</p>
                    </div>
                    <div className="skills__experience__item bg__3">
                        <span>
                            50+
                        </span>
                        <p>Certificates</p>
                    </div>
                </div>
                <h2 className="skills__techs center z__2">
                    My technologies
                </h2>
                <div className="skills__techs center z__2">
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
                                <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
                            </svg>
                        </figure>
                        <h3>
                            HTML
                        </h3>
                    </div>
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
                                <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
                            </svg>
                        </figure>
                        <h3>
                            CSS
                        </h3>
                    </div>
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 32 32">
                                <path d="M2 2v28h28V2zm15.238 21.837c0 2.725-1.6 3.969-3.931 3.969c-2.106 0-3.325-1.087-3.95-2.406l2.144-1.294c.413.731.788 1.35 1.694 1.35c.862 0 1.412-.338 1.412-1.656v-8.944h2.631zm6.224 3.969c-2.444 0-4.025-1.162-4.794-2.688l2.144-1.237c.563.919 1.3 1.6 2.594 1.6c1.087 0 1.788-.544 1.788-1.3c0-.9-.713-1.219-1.919-1.75l-.656-.281c-1.9-.806-3.156-1.825-3.156-3.969c0-1.975 1.506-3.475 3.85-3.475c1.675 0 2.875.581 3.738 2.106l-2.05 1.313c-.45-.806-.938-1.125-1.694-1.125c-.768 0-1.256.488-1.256 1.125c0 .788.488 1.106 1.619 1.6l.656.281c2.238.956 3.494 1.938 3.494 4.137c0 2.363-1.863 3.662-4.357 3.662z"></path>
                            </svg>
                        </figure>
                        <h3>
                            JS
                        </h3>
                    </div>
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
                                <path d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"></path>
                            </svg>
                        </figure>
                        <h3>
                            Git
                        </h3>
                    </div>
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40"   viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                            </svg>
                        </figure>
                        <h3>
                            Github
                        </h3>
                    </div>
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 640 512">
                                <path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1c-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2s-1.4-6.6-14.3-6.7s-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3c-4.4-8.5-8.1-16-8.9-22c-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2s-1.4-6.6-14.29-6.7s-24 2.5-25.3 5.9s-2.7 11.4-5.3 19.1s-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6c-.4.8-.7 1.3-.9 1.7c.3-.5.5-1 .5-.8c-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1c-.6 0-1.9-8.4.3-19.9c4.7-24.2 15.8-61.8 15.7-63.1c-.1-.7 2.1-7.2-7.3-10.7c-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2s10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5c-7.9 4.3-25 13.6-43 23.5c-6.9 3.8-14 7.7-20.7 11.4c-.5-.5-.9-1-1.4-1.5c-35.79-38.2-101.87-65.2-99.07-116.5c1-18.7 7.5-67.8 127.07-127.4c98-48.8 176.35-35.4 189.84-5.6c19.4 42.5-41.89 121.6-143.66 133c-38.79 4.3-59.18-10.7-64.28-16.3c-5.3-5.9-6.1-6.2-8.1-5.1c-3.3 1.8-1.2 7 0 10.1c3 7.9 15.5 21.9 36.79 28.9c18.7 6.1 64.18 9.5 119.17-11.8c61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4c-48.69 45.6-56.48 85.3-53.28 101.9c11.39 58.9 92.57 97.3 125.06 125.7c-1.6.9-3.1 1.7-4.5 2.5c-16.29 8.1-78.18 40.5-93.67 74.7c-17.5 38.8 2.9 66.6 16.29 70.4c41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8c4.2-2.5 8.5-5 12.8-7.5c8.29-4.9 16.39-9.4 23.49-13.3c-4 10.8-6.9 23.8-8.4 42.6c-1.8 22 7.3 50.5 19.1 61.7c5.2 4.9 11.49 5 15.39 5c13.8 0 20-11.4 26.89-25c8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46c16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30c-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5c-12.79 15.2-28 32.6-30 37.6c-2.4 5.9-1.8 10.3 2.8 13.7c3.4 2.6 9.4 3 15.69 2.5c11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8c-.4-9.6-3.5-19.2-7.3-28.2c1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7c-18.59 15.1-30.09 32.6-34.09 44.1c-7.4 21.3-1.6 30.9 9.3 33.1c4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6c-.3-7.9-2.5-15.8-5.4-23.4c15.7-6.6 36.09-10.2 62.09-7.2c55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25s-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9c4.6-.8 29.19-11.8 30.29-38.7c1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4c2.7-1.6 6.6-4 11.4-6.9c.8-.5 1.2-.7 1.2-.7c.9-.6 1.9-1.1 2.9-1.7c8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6c-7-1.8-11.3-32.3-1.4-62.3c5-15.1 15.6-33.1 21.9-40.1c10.09-11.3 21.19-14.9 23.79-10.4c3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6c-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9c0 .5.1 1 .1 1.6c-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7c2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"></path>
                            </svg>
                        </figure>
                        <h3>
                            Sass
                        </h3>
                    </div>
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 24 24">
                                <path d="M8 3a7 7 0 0 0 0 14h1.07a7.06 7.06 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7.021 7.021 0 0 1 1.426 2A7 7 0 0 0 16 3H8Zm3 13a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16Z"></path>
                            </svg>
                        </figure>
                        <h3>
                            SEO
                        </h3>
                    </div>
                    <div className="skills__techs__item bg__3">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 2048 2048">
                                <path d="M1930 630q0 22-2 43t-8 43l123 51l-49 118l-124-51q-46 74-120 120l51 125l-118 49l-52-124q-21 5-42 7t-43 3q-22 0-43-2t-43-8l-23 56l-111-67l16-39q-74-46-120-120l-125 51l-49-118l124-51q-5-21-7-42t-3-44q0-22 2-43t8-42l-124-52l49-118l125 52q23-37 53-67t67-54l-51-124l118-49l51 123q21-5 42-7t44-3q22 0 43 2t42 8l52-123l118 49l-51 124q74 46 120 120l124-51l49 118l-123 52q5 21 7 42t3 43zm-384 256q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20zm-577 220l139-58l44 106v15l-133 55q7 27 11 54t4 56q0 28-4 55t-11 55l133 55v15l-44 106l-139-58q-29 48-68 87t-87 69l58 139l-119 49l-57-139q-27 7-54 11t-56 4q-28 0-55-4t-55-11l-58 139l-118-49l58-140q-97-58-155-155l-140 58l-48-118l138-58q-7-27-11-54t-4-56q0-28 4-55t11-55l-138-57l48-119l140 58q58-97 155-155l-58-139l118-49l58 138q27-7 54-11t56-4q28 0 55 4t55 11l57-138l119 49l-58 139q97 58 155 155zm-383 548q66 0 124-25t101-68t69-102t26-125q0-66-25-124t-69-101t-102-69t-124-26q-66 0-124 25t-102 69t-69 102t-25 124q0 66 25 124t68 102t102 69t125 25zm694 394v-896l747 448l-747 448zm128-670v444l370-222l-370-222z"></path>
                            </svg>
                        </figure>
                        <h3>
                            Scrum
                        </h3>
                    </div>
                </div>
            </section>

            <section className="projects bg__1" id="Projects">
                <article className="projects__info center">
                    <div className="projects__info__text">
                        <h2>
                            FEATURED PROJECTS
                        </h2>
                        <p>
                            Here you can see my principal projects
                        </p>
                    </div>
                    <button className="button inactive" type="button">
                        <a href="/projects">View all</a>
                    </button>
                </article>
                <div className="projects__box center">
                    <Project
                        img="./src/assets/imgs/projects/Christopher-Emmanuel.webp"
                        project="Accountant Landing Page"
                        repo="https://github.com/nestorrig/Accountant_page"
                        live="https://christopher-emmanuel.netlify.app/"
                    />
                    <Project
                        img="./src/assets/imgs/projects/Pamela.webp"
                        project="Pamela Landing Page"
                        repo="https://github.com/nestorrig/Pamela_portfolio"
                        live="https://nestorrig.github.io/Pamela_portfolio"
                    />
                    <Project
                        img="./src/assets/imgs/projects/MOKEPON.webp"
                        project="Mokepon"
                        repo="https://github.com/nestorrig/PLATZI-Curso-Programacion-Basica"
                        live="https://nestorrig.github.io/PLATZI-Curso-Programacion-Basica/progarmar/mokepon/mokepon.html"
                    />
                    <Project
                        img="./src/assets/imgs/projects/Calculators.webp"
                        project="Calculators"
                        repo="https://github.com/nestorrig/PLATZI-Taller-Practico-de-JavaScript_Matematicas-y-Estadistica-Basica"
                        live="https://nestorrig.github.io/PLATZI-Taller-Practico-de-JavaScript_Matematicas-y-Estadistica-Basica"
                    />
                    <Project
                        img="https://static.platzi.com/media/porfilio/batatabit_capture_06_162709e2-09e2-440e-952d-a2cd7d5b25f2.png"
                        project="Batatabit"
                        repo="https://github.com/nestorrig/PLATZI-Curso-de-Responsive-Design_Maquetacion-Mobile-First"
                        live="https://nestorrig.github.io/PLATZI-Curso-de-Responsive-Design_Maquetacion-Mobile-First/"
                    />
                    <Project
                        img="https://static.platzi.com/media/porfilio/blog-clase25_1e4fb70b-1fc6-4238-a9d4-d10d65b32505.png"
                        project="Blog"
                        repo="https://github.com/nestorrig/PLATZI-Curso-Practico-de-Maquetacion-en-CSS/"
                        live="https://nestorrig.github.io/PLATZI-Curso-Practico-de-Maquetacion-en-CSS/"
                    />
                    <Project
                        img="https://static.platzi.com/media/porfilio/google-clone_ba049f84-07da-4525-8c32-44891261fb39.png"
                        project="Google clone"
                        repo="https://github.com/nestorrig/PLATZI-Curso-Practico-de-HTML-y-CSS"
                        live="https://nestorrig.github.io/PLATZI-Curso-Practico-de-HTML-y-CSS"
                    />
                    <Project
                        img="https://static.platzi.com/media/porfilio/wikipedia-clone_1b837b2a-a8a1-4dff-980e-86737b866783.png"
                        project="Wikipedia clone"
                        repo="https://github.com/nestorrig/PLATZI-Curso-Practico-de-HTML-y-CSS"
                        live="https://nestorrig.github.io/PLATZI-Curso-Practico-de-HTML-y-CSS/wiki"
                    />
                </div>
            </section>

            <section className="contact bg__2">
                <div>
                    <div className="contact__box center bg__3 z__2">
                        <article className="contact__text">
                                <h3>
                                    Lets work on your next project
                                </h3>
                                <p>
                                    You can send me an email where you can explain the detail of your project
                                </p>
                        </article>
                        <button className="button" type="button">
                            <a href="mailto:contacto@nestorriosgarcia.com">Contact</a>
                        </button>
                    </div>
                </div>
            </section>

        </main>
        <Footer/>
    </>
    )
}


export { App }
