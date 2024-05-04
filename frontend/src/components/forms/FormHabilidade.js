import FormField from '../FormField';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPrint, faSave } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { connect } from 'react-redux';
import { setContato } from '../../actions/contatoActions';

const enviarParaAPI = (contatoData) => {
  console.log(contatoData.nome)
    axios.post('http://localhost:8000/curriculum/', {
      name: contatoData.nome,
      email: contatoData.email,
      phone: contatoData.telefone,
      address: "Av Fim do Mundo",
    edu_info: [
      'Bachelor of Science in Computer Science, XYZ University, 2020',
      'Master of Business Administration, ABC University, 2022'
    ],
    exp_info: [
      'Software Engineer at Company A (2020-2022)',
      'Business Analyst at Company B (2022-present)'
    ],
    skills_info: ['Python', 'Data Analysis', 'Project Management', 'Communication']
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
};


const FormHabilidade = (props) => {
  const { mudarForm, novaHabilidade, states, limparForm, defHabilidade, contato } =
    props;
  const submitForm = (e) => {
    e.preventDefault();
    const habilidade = {
      id: e.target.codigo.value === '' ? uniqid() : e.target.codigo.value,
      habilidade: e.target.habilidade.value,
      nivel: e.target.nivel.value,
    };
    novaHabilidade(habilidade);
    limparForm();
    e.target.habilidade.focus();
  };

  return (
    <>
      <h2>Habilidades</h2>
      <form action='' onSubmit={(e) => submitForm(e)}>
        <input type='hidden' name='codigo' value={states.codigo} />
        <FormField
          id='habilidade'
          label='Habilidade:'
          atributos={{
            type: 'text',
            minLength: 3,
            name: 'habilidade',
          }}
          iptValue={states.habilidade}
          iptChange={defHabilidade.habilidade}
        />
        <FormField
          id='nivel'
          label='Nível:'
          atributos={{
            type: 'text',
            minLength: 3,
            name: 'nivel',
          }}
          iptValue={states.nivel}
          iptChange={defHabilidade.nivel}
        />
        <div className='botoes'>
          <button type='submit' className='mr-auto'>
            {states.textoBotao}
          </button>
          <button type='button' onClick={() => mudarForm('experiencia')}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              alt='Seta para a esquerda'
              title='Anterior'
            />
          </button>
          <button type='button' onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} alt='Impressora' title='Imprimir' />
          </button>
          <button type='button' onClick={() => enviarParaAPI(contato)}>
            <FontAwesomeIcon icon={faSave} alt='Salvar' title='Salvar' />
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  contato: state.contato
});

export default connect(mapStateToProps, { setContato })(FormHabilidade);
