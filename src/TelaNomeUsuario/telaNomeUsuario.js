import telaNomeUsuario from '../TelaNomeUsuario/telaNomeUsuario.css'
import logo from '../img/Logo.png'

const TelaNomeUsuario = () => {
    return(
        <div className="divPrincipal"> 
        
            <div className="divLogo">   
                    <img src={logo} /> 
            </div>

            <div className="h1NomeUsuario">
                <h1>Nome de Usuario:</h1>
            </div>

            <div className="divNomeUsuario">
                <input className="inputNomeUsuario" placeholder="Insira um nome de usuario: "></input><p />
                
            </div>

            <div>
                <button className="buttonConfirmar">Confirmar</button>

            </div>

            <div className="bottonVoltar">
                <button> Voltar </button>

            </div>
 
 


        </div>
    )
}
export default TelaNomeUsuario
