import { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="formulario-cadastro">
        <input
          type="text"
          placeholder="Título"
          autoFocus
        />
        
        <textarea
          placeholder="Escreva sua nota..."
          rows={10}
        />

        <div className="button-container">
          <button
            onClick={event => event.preventDefault()}
          >
            Criar Nota
          </button>
        </div>
      </form>
    );
  }
}

export default FormularioCadastro;