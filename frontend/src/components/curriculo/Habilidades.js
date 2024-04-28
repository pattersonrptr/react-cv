import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import '../../styles/curriculo/Habilidades.css';

const Habilidades = (props) => {
  const { habilidades } = props.states;
  return (
    <div className='habilidades'>
      <h2>
        <FontAwesomeIcon icon={faLightbulb} />
        Habilidades
      </h2>
      <div>
        {habilidades.map((habilidade) => {
          return (
            <div className='habilidade' key={habilidade.id}>
              <h3>{habilidade.habilidade}</h3>
              <p>{habilidade.nivel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Habilidades;
