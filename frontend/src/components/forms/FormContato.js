import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FormField from '../FormField';
import { setContato } from '../../actions/contatosActions';

const FormContato = (props) => {
  const { contato, setContato, mudarForm } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContato({ ...contato, [name]: value }); // Atualiza o estado do Redux
  };

  return (
    <>
      <h2>Informações de contato</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormField
          id='nome'
          label='Nome completo:'
          atributos={{
            type: 'text',
            required: true,
            minLength: 3,
            name: 'nome',
          }}
          iptValue={contato.nome}
          iptChange={handleInputChange}
        />
        <FormField
          id='celular'
          label='Celular:'
          atributos={{
            type: 'tel',
            minLength: 11,
            maxLength: 11,
            name: 'telefone',
          }}
          iptValue={contato.telefone}
          iptChange={handleInputChange}
        />
        <FormField
          id='email'
          label='Email:'
          atributos={{
            type: 'email',
            name: 'email',
          }}
          iptValue={contato.email}
          iptChange={handleInputChange}
        />
        <FormField
          id='linkedin'
          label='Linkedin:'
          atributos={{
            type: 'text',
            name: 'linkedin',
          }}
          iptValue={contato.linkedin}
          iptChange={handleInputChange}
        />
        <button type='submit' onClick={() => mudarForm('objetivo')}>
          <FontAwesomeIcon
            icon={faArrowRight}
            alt='Seta para a direita'
            title='Próximo'
          />
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  contato: state.contato,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setContato }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormContato);
