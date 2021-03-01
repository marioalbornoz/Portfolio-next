import { Layout } from "../components/Layout";
import { experiences, projects, skills } from "../profile";
import Link from 'next/link';

const Index = () => (
  <Layout>
    {/* header */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/malbornoz.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Mario Albornoz Castro</h1>
              <h5>Ingeniero Informatico - FullStack Developer jr</h5>
              <p>
                Egresado de ingeniería en informática de la UTEM, en proceso de
                titulación, desarrollador web y técnico medio en
                telecomunicaciones. Interesado principalmente en ofertas
                laborales junior.
              </p>
              <p>
                Actualmente enfocado en el desarrollo de software, aprendiendo y
                reforzando tecnologías de Javascript y Python. Conocimientos en
                ccs, boostrap y he tenido experiencia con Angular 7. Por el lado
                del backend trabajando con django y/o node js mis proyectos
                personales, como el trabajo de titulo por ejemplo, también he
                tenido experiencia en MeteorJs.
              </p>
              <p>
                {" "}
                Muy apasionado por el aprendizaje, de las distintas tecnologías
                y herramientas de la programación, de aqui a 4 años me proyecto
                liderando en tecnologias front y back en desarrollo de software.
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* end header */}
    {/* second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h2>skills</h2>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h2>Experience</h2>
            <ul>
              {experiences.map(({ title, company, desc, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3> <span className="lead">{company}</span>
                  <h5>
                    {" "}
                    {from} - {to ? to : "current"}
                  </h5>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ title, desc, url, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <a href={url}>Know more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="#!">
              <a className="btn btn-outline-light">More projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;