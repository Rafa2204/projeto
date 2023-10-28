import telaLogin from  "../TelaLogin/telaLogin.css"
import logo from '../img/Logo.png'
import Home from '../TelaHome/telaHome'

const TelaLogin = () => {

    const BTelaLogin = () => {
        const localhostURL = 'http://localhost:3000/Home';
            window.open(localhostURL, 'blank')
    }

    return(
        <div className="divPrincipal">

            <div className="divLogo">   
                <img src={logo} /> 
            </div>

            
            <div className="h1">
                <h1>Tela de Login</h1>
            </div>

            <div className="divEmailLogin">
                <label className = "labelEmailLogin"> Email:  </label><p />
                <input className="inputEmailLogin" placeholder="Digite seu Email: "></input><p />
                
            </div>
                
            <div className="divSenhaLogin">
                <label className = "labelSenhaLogin"> Senha:  </label><p />
                <input className="inputSenha" placeholder="Digite sua senha: "></input><p />

            </div>

            <div>
                <button className="buttonEntrar" onClick={BTelaLogin}>Entrar</button>

            </div>



            <div className="CadastreseLogin">
                <label>Novo no site?</label>
                <button> Cadastre-se</button>
            </div>

            <div className="funcionarioPrefeituraLogin">
                <label>É funcionário da prefeitura? </label>
                <button className="buttonEntrarComoPrefeitura"> Entrar como Prefeitura </button>
            </div>


     
            
        </div>

       
    )
}
export default TelaLogin