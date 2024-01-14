export default function Principal() {
  return (
    <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" /><section className="home section" id="home">
      <div className="home__container container grid">
        <img src="imagen.png" alt="" className="home__img" />

        <div className="home__data">
          <h1 className="home__title">Portafolio Electrónico</h1>
          <h3 className="home__subtitle">Desarrollo de Aplicaciones web</h3>
          <p className="home__description">
            Hola, mi nombre es Leonardo Palomino y compartiré mi trabajo y progreso a lo largo del curso.
            También, incluiré reflexiones sobre lo que he aprendido y cómo me ha ayudado
            el curso a desarrollar mis habilidades.
          </p>
          <a Link href="/sobre-mi" className="hover:text-gray-200 button"><i class="fa-regular fa-user button__icon"></i>Más Sobre Mí
          </a>

        </div>

        <div className="my__info">
          <div className="info__item"></div>
        </div>
      </div>
    </section></>
  );
}