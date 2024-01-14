import React from 'react'; // Asegúrate de importar React

export default function SobreMi() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <section className="home section" id="home">
        <section className="about section" id="sobre_mi">
          <h2 className="section__title">
            Sobre mí
          </h2>

          <div className="about__container container grid">
            <img src="/Leonardo Palomino.png" alt="" className="about__img" />
            <div className="about__data">
              <h3 className="about__heading">Mi nombre es Leonardo Daniel Palomino Condor</h3>
              <p className="about__description">
                Soy un estudiante entusiasta de la UNCP en el noveno semestre de Ingeniería de Sistemas. Mi
                portafolio electrónico te invita a descubrir mi crecimiento y logros en el emocionante campo
                del desarrollo web. Desde que ingresé a la universidad, quedé cautivado por la fusión entre
                tecnología y creatividad. Mi formación en Ingeniería de Sistemas me proporcionó bases sólidas
                en informática; además, en el curso de Desarrollo de Aplicaciones Web estoy encontrando mucho
                interés. Así mismo, algunas de mis habilidades para el desarrollo de este curso son:
              </p>
              <div className="about__info grid">
                <div className="about__box">
                  <i className="fa-solid fa-dumbbell about__icon"></i>
                  <h3 className="about__title">Perseverancia</h3>
                  <span className="about__subtitle">Superar obstáculos</span>
                </div>
                <div className="about__box">
                  <i className="fa-solid fa-book about__icon"></i>
                  <h3 className="about__title">Dedicación</h3>
                  <span className="about__subtitle">Compromiso total</span>
                </div>
                <div className="about__box">
                  <i className="fa-solid fa-magnifying-glass about__icon"></i>
                  <h3 className="about__title">Curiosidad</h3>
                  <span className="about__subtitle">Aprendizaje constante</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}