import logo from './logo.svg';
import './App.css';
import TelaCadastro from './TelaCadastro/telaCadastro';
import TelaLogin from './TelaLogin/telaLogin'
import TelaLoginPrefeitura from '../src/TelaLoginPrefeitura/telaLoginPrefeitura';
import TelaEsqueceuSenha from './TelaEsqueceuSenha/telaEsqueceuSenha';
import TelaNomeUsuario from './TelaNomeUsuario/telaNomeUsuario';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TelaCadastro></TelaCadastro>
        {/* <TelaLogin></TelaLogin> */}
        {/* <TelaLoginPrefeitura> </TelaLoginPrefeitura> */}
        {/* <TelaEsqueceuSenha></TelaEsqueceuSenha> */}
        {/* <TelaNomeUsuario> </TelaNomeUsuario> */}


      </header>
    </div>
  );
}

export default App;
 // "start": "react-scripts start",
//  <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>