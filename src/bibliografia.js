export default function Bibliografia() {
    return (
      <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <section 
      className="doc section"
      id="bibliografia"
      style={{ background: "url('/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
            
            <h2  class="section__title">Referencias y Documentación</h2>
            
            <div class="doc__container container grid">
                <div class="paragraph1">
                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">Visual Studio Code </h3>
                            <p class="timeline__text">Editor de código (HTML, CSS, JavaScript)</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://code.visualstudio.com/docs"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">Emmet</h3>
                            <p class="timeline__text">Complemento para editores de texto (HTML)</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://docs.emmet.io/cheat-sheet/"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">Bootstrap</h3>
                            <p class="timeline__text">Framework para diseño y desarrollo de sitios web (CSS, JavaScript)</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">JavaScript</h3>
                            <p class="timeline__text">Lenguaje para crear páginas interactivas</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="paragraph2">
                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">HTML</h3>
                            <p class="timeline__text">Lenguaje de marcado para páginas web</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">CSS</h3>
                            <p class="timeline__text">Lenguaje para presentación y diseño de páginas web</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">Tailwind CSS</h3>
                            <p class="timeline__text">Framework para el diseño de páginas web (CSS)</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://tailwindcss.com/docs/installation"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">React</h3>
                            <p class="timeline__text">Biblioteca para crear interfaces de usuarios interactivas y dinámicas (JavaScript)</p>
                            <span class="timeline__link"><i class="fa-solid fa-rocket"></i>
                                <a href="https://es.react.dev/learn"target="_blank">Ver enlace</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
       </>
    );
  }