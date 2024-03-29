import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { Project } from "./components/Project/Project";
import { SkillCard } from "./components/Cards/";

function App() {
  return (
    <>
      <Menu />
      <Header />

      <main>
        <section className="about" id="About">
          <div className="center">
            <figure className="about__imgContainer">
              <img className="about__img" src="./imgs/me.png" alt="Me" />
            </figure>
            <article className="about__info">
              <h2 className="about__subtitle">Hello Im Nestor</h2>
              <h1 className="about__title">Front end Developer</h1>
              <p className="about__parraf">
                Ive held a lifelong fascination with the realm of science and
                technology. This passion guided me to explore the domain of
                software and its various specializations. What drew me
                particularly to Front-End development was the harmonious blend
                it offers between design aesthetics and functionality.
              </p>
              <button className="button" type="button">
                <a href="mailto:contacto@nestorriosgarcia.com">
                  Send me an email
                </a>
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
                <img src="./svgs/roles_ux-ui.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>Animation Developer</h2>
                <p>
                  My focus lies in producing visual effects, animations, and
                  transitions that elevate the user experience, making the
                  interface more captivating and dynamic.
                </p>
              </div>
            </article>
            <article className="skills__roles__item bg__3">
              <figure>
                <img src="./svgs/roles_programming.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>General Front end Developer</h2>
                <p>
                  This role involves a broad array of responsibilities, from
                  implementing designs and crafting visual components to
                  overseeing user interaction and collaborating with the
                  backend.
                </p>
              </div>
            </article>
            <article className="skills__roles__item bg__3">
              <figure>
                <img src="/svgs/roles_responsive.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>Responsive Developer</h2>
                <p>
                  I specialize in creating designs that seamlessly adjust to
                  various screen sizes, guaranteeing that the application
                  appears and operates smoothly across mobile devices, tablets,
                  and desktop computers.
                </p>
              </div>
            </article>
          </div>
          <div className="skills__experience center z__2">
            <div className="skills__experience__item __years">
              <span>2</span>
              <h2>Years Experience</h2>
            </div>
            <div className="skills__experience__item bg__3">
              <span>3+</span>
              <p>Clients</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>10+</span>
              <p>Projects</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>5+</span>
              <p>Skills</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>50+</span>
              <p>Certificates</p>
            </div>
          </div>
          <h2 className="skills__techs center z__2">My technologies</h2>
          <div className="skills__techs center z__2">
            <SkillCard name="HTML" icon="html" />
            <SkillCard name="CSS" icon="css" />
            <SkillCard name="JS" icon="js" />
            <SkillCard name="Git" icon="git" />
            <SkillCard name="Github" icon="github" />
            <SkillCard name="SASS" icon="sass" />
            <SkillCard name="React js" icon="react" />
            <SkillCard name="Tailwind CSS" icon="tailwind" />
            <SkillCard name="Three js" icon="threejs" />
            <SkillCard name="Greensock" icon="greensock" />
          </div>
        </section>

        <section className="projects bg__1" id="Projects">
          <article className="projects__info center">
            <div className="projects__info__text">
              <h2>FEATURED PROJECTS</h2>
              <p>Here you can see my principal projects</p>
            </div>
            <button className="button inactive" type="button">
              <a href="/projects">View all</a>
            </button>
          </article>
          <div className="projects__box center">
            <Project
              img="./imgs/projects/Christopher-Emmanuel.webp"
              project="Accountant Landing Page"
              repo="https://github.com/nestorrig/Accountant_page"
              live="https://christopher-emmanuel.netlify.app/"
            />
            <Project
              img="./imgs/projects/todo-app.webp"
              project="Todo App"
              repo="https://github.com/nestorrig/PLATZI-React"
              live="https://todo-app-nestorrig.netlify.app/"
            />
            <Project
              img="./imgs/projects/Pamela.webp"
              project="Pamela Landing Page"
              repo="https://github.com/nestorrig/Pamela_portfolio"
              live="https://nestorrig.github.io/Pamela_portfolio"
            />
            <Project
              img="./imgs/projects/Calculators.webp"
              project="Calculators"
              repo="https://github.com/nestorrig/PLATZI-Taller-Practico-de-JavaScript_Matematicas-y-Estadistica-Basica"
              live="https://nestorrig.github.io/PLATZI-Taller-Practico-de-JavaScript_Matematicas-y-Estadistica-Basica"
            />
            <Project
              img="./imgs/projects/MOKEPON.webp"
              project="Mokepon"
              repo="https://github.com/nestorrig/PLATZI-Curso-Programacion-Basica"
              live="https://nestorrig.github.io/PLATZI-Curso-Programacion-Basica/progarmar/mokepon/mokepon.html"
            />
            <Project
              img="./imgs/projects/Platzi-Travel.webp"
              project="Platzi Travel"
              repo="https://github.com/nestorrig/PLATZI-Tailwind-Basico"
              live="https://platzi-travel-nestorrig.netlify.app/"
            />
            <Project
              img="https://static.platzi.com/media/porfilio/batatabit_capture_06_162709e2-09e2-440e-952d-a2cd7d5b25f2.png"
              project="Batatabit"
              repo="https://github.com/nestorrig/PLATZI-Curso-de-Responsive-Design_Maquetacion-Mobile-First"
              live="https://nestorrig.github.io/PLATZI-Curso-de-Responsive-Design_Maquetacion-Mobile-First/"
            />
          </div>
        </section>

        <section className="contact bg__2">
          <div>
            <div className="contact__box center bg__3 z__2">
              <article className="contact__text">
                <h3>Lets work on your next project</h3>
                <p>
                  You can send me an email where you can explain the detail of
                  your project
                </p>
              </article>
              <button className="button" type="button">
                <a href="mailto:contacto@nestorriosgarcia.com">Contact</a>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export { App };
