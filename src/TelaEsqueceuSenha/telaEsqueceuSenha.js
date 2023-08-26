import telaEsqueceuSenha from '../TelaEsqueceuSenha/telaEsqueceuSenha.css'
import logo from '../img/Logo.png'

const TelaEsqueceuSenha = () => {
    return(
        <div className="divPrincipal"> 
        
            <div className="divLogo">   
                <img src={logo} /> 
            </div>

            <div className="h1">
                <h1>Esqueceu a senha?</h1>
                
            </div>

            <div>
                <label className="h1label">Defina senha em duas etapas rápidas:</label>
            
            </div><p />

            <div className="divEmailEsqueceuSenha">
                <label className = "labelEmailEsqueceuSenha"> Email:  </label><p />
                <input className="inputEmailEsqueceuSenha" placeholder="Digite seu Email: "></input><p />
                
            </div>

            <div>
                <button className="buttonRedefinirSenha">Redefinir Senha</button>

            </div>

            <div className="CadastreseLoginPrefeitura">
                
                <button> Voltar </button>
            </div>






        </div>
    )
}        
export default TelaEsqueceuSenha