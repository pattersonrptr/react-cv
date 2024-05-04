import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Curriculo from './components/curriculo/Curriculo';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [formAtual, setFormAtual] = useState('contato');
  const [formacoes, setFormacoes] = useState([]);
  const [experiencias, setExperiencias] = useState([]);
  const [habilidades, setHabilidades] = useState([]);

  // states
  const states = {
    nome,
    celular,
    email,
    linkedin,
    objetivo,
    formAtual,
    formacoes,
    experiencias,
    habilidades,
  };

  // states de contato
  const defContatos = {
    defNome: (e) => setNome(e.target.value),
    defEmail: (e) => setEmail(e.target.value),
    defCelular: (e) => setCelular(e.target.value),
    defLinkedin: (e) => setLinkedin(e.target.value),
  };

  // state de objetivo
  const defObjetivo = (e) => setObjetivo(e.target.value);

  // states de formação
  const novaFormacao = (formacao) => {
    setFormacoes((prevFormacoes) => {
      const novasFormacoes = [...prevFormacoes];
      let edicao = false;
      novasFormacoes.forEach((f) => {
        if (f.id === formacao.id) {
          f.curso = formacao.curso;
          f.instituicao = formacao.instituicao;
          f.inicio = formacao.inicio;
          f.fim = formacao.fim;
          edicao = true;
        }
      });
      if (edicao) {
        return novasFormacoes;
      } else {
        return [...prevFormacoes, formacao];
      }
    });
  };

  const funcFormacao = {
    nova: novaFormacao,
    apagar: (id) =>
      setFormacoes((prevFormacoes) => prevFormacoes.filter((f) => f.id !== id)),
  };

  // states de experiencias
  const novaExperiencia = (experiencia) =>
    setExperiencias((prevExperiencias) => {
      const novasExperiencias = [...prevExperiencias];
      let edicao = false;
      novasExperiencias.forEach((e) => {
        if (e.id === experiencia.id) {
          e.cargo = experiencia.cargo;
          e.empresa = experiencia.empresa;
          e.mesInicio = experiencia.mesInicio;
          e.anoInicio = experiencia.anoInicio;
          e.mesFim = experiencia.mesFim;
          e.anoFim = experiencia.anoFim;
          e.tarefas = experiencia.tarefas;
          edicao = true;
        }
      });
      if (edicao) {
        return novasExperiencias;
      }
      return [...prevExperiencias, experiencia];
    });

  const funcExperiencia = {
    nova: novaExperiencia,
    apagar: (id) =>
      setExperiencias((prevExperiencias) =>
        prevExperiencias.filter((e) => e.id !== id)
      ),
  };

  // states de habilidades
  const novaHabilidade = (habilidade) =>
    setHabilidades((prevHabilidades) => {
      const novasHabilidades = [...prevHabilidades];
      let edicao = false;
      novasHabilidades.forEach((h) => {
        if (h.id === habilidade.id) {
          h.habilidade = habilidade.habilidade;
          h.nivel = habilidade.nivel;
          edicao = true;
        }
      });
      if (edicao) {
        return novasHabilidades;
      }
      return [...prevHabilidades, habilidade];
    });

  const funcHabilidade = {
    nova: novaHabilidade,
    apagar: (id) =>
      setHabilidades((prevHabilidades) =>
        prevHabilidades.filter((h) => h.id !== id)
      ),
  };

  return (
    <Provider store={store}>
      <Header />
      <main>
        <section className='dados'>
          <Formulario
            states={states}
            mudarForm={setFormAtual}
            defContatos={defContatos}
            funcFormacao={funcFormacao}
            funcExperiencia={funcExperiencia}
            funcHabilidade={funcHabilidade}
            defObjetivo={defObjetivo}
          />
        </section>
        <Curriculo states={states} />
      </main>
      <Footer />
    </Provider>
  );
};

export default App;
