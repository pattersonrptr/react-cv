import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Formulario from './components/Formulario';
import { Component } from 'react';
import Curriculo from './components/curriculo/Curriculo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      celular: '',
      email: '',
      linkedin: '',
      objetivo: '',
      formAtual: 'contato',
      formacoes: [],
      experiencias: [],
      habilidades: [],
    };

    // contato
    this.defNome = this.defNome.bind(this);
    this.defEmail = this.defEmail.bind(this);
    this.defCelular = this.defCelular.bind(this);
    this.defLinkedin = this.defLinkedin.bind(this);

    // objetivo
    this.defObjetivo = this.defObjetivo.bind(this);

    // formacao
    this.novaFormacao = this.novaFormacao.bind(this);
    this.apagarFormacao = this.apagarFormacao.bind(this);

    // experiencia
    this.novaExperiencia = this.novaExperiencia.bind(this);
    this.apagarExperiencia = this.apagarExperiencia.bind(this);

    // habilidade
    this.novaHabilidade = this.novaHabilidade.bind(this);
    this.apagarHabilidade = this.apagarHabilidade.bind(this);

    // form exibido
    this.mudarForm = this.mudarForm.bind(this);
  }

  // states de contato
  defNome = (e) => this.setState({ nome: e.target.value });
  defEmail = (e) => this.setState({ email: e.target.value });
  defCelular = (e) => this.setState({ celular: e.target.value });
  defLinkedin = (e) => this.setState({ linkedin: e.target.value });

  // state de objetivo
  defObjetivo = (e) => this.setState({ objetivo: e.target.value });

  // states de formação
  novaFormacao = (formacao) => {
    this.setState((ant) => {
      const novasFormacoes = [...ant.formacoes];
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
      }
      return {
        formacoes: [...ant.formacoes, formacao],
      };
    });
  };

  apagarFormacao = (id) =>
    this.setState((ant) => {
      return {
        formacoes: ant.formacoes.filter((f) => f.id !== id),
      };
    });

  // states de experiencias
  novaExperiencia = (experiencia) =>
    this.setState((ant) => {
      const novasExperiencias = [...ant.experiencias];
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
      return {
        experiencias: [...ant.experiencias, experiencia],
      };
    });

  apagarExperiencia = (id) =>
    this.setState((ant) => {
      return {
        experiencias: ant.experiencias.filter((e) => e.id !== id),
      };
    });

  // states de habilidades
  novaHabilidade = (habilidade) =>
    this.setState((ant) => {
      const novasHabilidades = [...ant.habilidades];
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
      return {
        habilidades: [...ant.habilidades, habilidade],
      };
    });

  apagarHabilidade = (id) =>
    this.setState((ant) => {
      return {
        habilidades: ant.habilidades.filter((h) => h.id !== id),
      };
    });

  // state de form exibido
  mudarForm(nomeForm) {
    this.setState({ formAtual: nomeForm });
  }

  render() {
    const defContatos = {
      defNome: this.defNome,
      defEmail: this.defEmail,
      defCelular: this.defCelular,
      defLinkedin: this.defLinkedin,
    };
    const funcFormacao = {
      nova: this.novaFormacao,
      apagar: this.apagarFormacao,
    };
    const funcExperiencia = {
      nova: this.novaExperiencia,
      apagar: this.apagarExperiencia,
    };
    const funcHabilidade = {
      nova: this.novaHabilidade,
      apagar: this.apagarHabilidade,
    };
    return (
      <>
        <Header />
        <main>
          <section className='dados'>
            <Formulario
              states={this.state}
              mudarForm={this.mudarForm}
              defContatos={defContatos}
              funcFormacao={funcFormacao}
              funcExperiencia={funcExperiencia}
              funcHabilidade={funcHabilidade}
              defObjetivo={this.defObjetivo}
            />
          </section>
          <Curriculo states={this.state} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
