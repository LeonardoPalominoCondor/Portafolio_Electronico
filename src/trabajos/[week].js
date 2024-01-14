import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TrabajoSemana = () => {
  const { week } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (week) {
      const selectedWeek = parseInt(week, 10);
  
      if (selectedWeek === 1) {
        setMessage('Esta es la semana 1');
      } else if (selectedWeek === 2) {
        setMessage('Esta no es la semana 1');
      } else {
        setMessage(`Mensaje para la semana ${selectedWeek}`);
      }
    } else {
      setMessage('Semana no especificada');
    }
  }, [week]);

  return (
    <div>
      <h1>Trabajos - Semana {week}</h1>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TrabajoSemana;