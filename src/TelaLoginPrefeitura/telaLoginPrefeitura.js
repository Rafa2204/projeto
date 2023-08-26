import telaLoginPrefeitura from '../TelaLoginPrefeitura/telaLoginPrefeitura.css'
import logo from '../img/Logo.png'

const TelaLoginPrefeitura = () => {
    return(
        <div className="divPrincipal"> 
        
        <div className="divLogo">   
                <img src={logo} /> 
            </div>

            
            <div className="h1">
                <h1>Login Prefeitura</h1>
            </div>

            <div className="divEmailLoginPrefeitura">
                <label className = "labelEmailLoginPrefeitura"> Email:  </label><p />
                <input className="inputEmailLoginPrefeitura" placeholder="Digite seu Email: "></input><p />
                
            </div>
                
            <div className="divSenhaLoginPrefeitura">
                <label className = "labelSenhaLoginPrefeitura"> Senha:  </label><p />
                <input className="inputSenhaPrefeitura" placeholder="Digite sua senha: "></input><p />

            </div>

            <div>
                <button className="buttonEntrarPrefeitura">Entrar</button>

            </div>



            <div className="CadastreseLoginPrefeitura">
                <label>Esqueceu sua senha?</label>
                <button> Clique aqui</button>
            </div>

            <div className="funcionarioPrefeituraLogin">
                <label>É usuario comum? </label>
                <button className="buttonEntrarComoPrefeitura"> Entrar como Usuario. </button>
            </div>

        
        
        
        
        
        </div>


    )
}
export default TelaLoginPrefeitura