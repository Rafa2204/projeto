import telaLogin from  "../TelaLogin/telaLogin.css"
import logo from '../img/Logo.png'

const TelaLogin = () => {
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
                <button className="buttonEntrar">Entrar</button>

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