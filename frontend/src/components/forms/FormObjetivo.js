import FormField from '../FormField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { setObjetivo } from '../../actions/objetivoActions';

const FormFormacao = (props) => {
  const { mudarForm, objetivo, setObjetivo } = props;

  const handleInputChange = (e) => {
    setObjetivo(e.target.value);
  };

  return (
    <>
      <h2>Objetivo</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormField
          id='objetivo'
          label='Objetivo:'
          atributos={{
            type: 'text',
            minLength: 3,
            name: 'objetivo',
          }}
          iptValue={objetivo}
          iptChange={handleInputChange}
        />
        <div className='botoes'>
          <button
            type='button'
            onClick={() => mudarForm('contato')}
            className='ml-auto'
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              alt='Seta para a esquerda'
              title='Anterior'
            />
          </button>
          <button type='submit' onClick={() => mudarForm('formacao')}>
            <FontAwesomeIcon
              icon={faArrowRight}
              alt='Seta para a direita'
              title='Próximo'
            />
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  objetivo: state.objetivo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setObjetivo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormFormacao);