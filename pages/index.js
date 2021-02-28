import { Layout } from "../components/Layout";

const Index = () => (
  <Layout>
    <h1>Hello world</h1>
    {/* header */}
    <header>
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/malbornoz.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Mario Albornoz Castro</h1>
              <h3>FullStack Developer</h3>
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
  </Layout>
);

export default Index;