import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isConclusionDropdownOpen, setConclusionDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation(); // Usa useLocation para obtener la ubicación actual

   // Cambia la lógica de los botones para asegurarte de que solo un menú pueda estar abierto a la vez
   const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    if (isConclusionDropdownOpen) {
      setConclusionDropdownOpen(false);
    }
  };

  const toggleConclusionDropdown = () => {
    setConclusionDropdownOpen(!isConclusionDropdownOpen);
    if (isDropdownOpen) {
      setDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the header or if it's on the header but not on a dropdown button
    if (headerRef.current && !headerRef.current.contains(event.target) ||
        (headerRef.current.contains(event.target) && !event.target.matches('.dropdown-button'))) {
      setDropdownOpen(false);
      setConclusionDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Cerrar los dropdowns cuando cambia la ruta
    setDropdownOpen(false);
    setConclusionDropdownOpen(false);

    // Agrega el listener para clics fuera del header
    document.addEventListener('click', handleClickOutside);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [location]); // Dependencia en la ubicación actual

  return (
    <header ref={headerRef} className="relative bg-blue-600 text-white p-4 flex flex-col justify-center items-center text-center">
      <video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="z-10 text-4xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
        Portafolio Electrónico Leonardo Daniel Palomino Condor 
      </div>
      <nav className="z-10 w-full">
        <ul className="flex flex-wrap justify-center gap-4 text-lg">
          <li>
            <Link to="/Principal" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/sobre-mi" className="hover:text-gray-200">Sobre Mí</Link>
          </li>
          <li className="relative">
            <button onClick={toggleDropdown} className="hover:text-gray-200 dropdown-button">
              Trabajos
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <ul className="text-gray-700 text-sm">
                  {[...Array(15).keys()].map((week) => (
                    <li key={week} className="px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      <Link to={`/trabajos/${week + 1}`}>
                        Semana {week + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="relative">
            <button onClick={toggleConclusionDropdown} className="hover:text-gray-200 dropdown-button">
              Conclusión
            </button>
            {isConclusionDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <ul className="text-gray-700 text-sm">
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                    <Link to="/conclusion">
                      Conclusión
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                    <Link to="/reflexion">
                      Reflexión
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link to="/bibliografia" className="hover:text-gray-200">Bibliografía</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
