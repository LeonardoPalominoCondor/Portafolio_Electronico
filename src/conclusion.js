const bgImage = process.env.PUBLIC_URL + '/bg.jpg';

export default function ConclusionPage() {
  return (
    <section 
      className="conclusion section min-h-screen bg-fixed bg-cover bg-center py-10 font-roboto flex flex-col justify-start items-center"
      style={{ backgroundImage: `url(${bgImage})`}}
    >
      <div className="conclusion__container container mx-auto max-w-4xl text-center">
        <h1 className="conclusion__title text-4xl font-bold text-white mb-4 mt-0">Conclusión</h1>
        <p className="conclusion__description text-lg text-gray-300">
          Aquí puedes compartir tus pensamientos finales y reflexiones sobre el proyecto o curso que has presentado en tu portafolio.
        </p>
      </div>
    </section>
  );
}
