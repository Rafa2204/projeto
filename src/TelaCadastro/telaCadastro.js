import telaCadastro from "../TelaCadastro/telaCadastro.css"
import logo from '../img/Logo.png'

const TelaCadastro = () => {
    return(
        <div className="divPrincipal">

            <div className="divLogo">   
                <img src={logo} /> 
            </div>


            <div className="h1">
                <h1>Tela de cadastro</h1>
            </div>

            <div className="divEmail">
                <label className = "labelEmail"> Email:  </label><p />
                <input className="inputEmail" placeholder="Digite seu Email: "></input><p />
            
            </div>
            
            <div className="divSenha">
                <label className = "labelSenha"> Senha:  </label><p />
                <input className="inputSenha" placeholder="Digite sua senha: "></input><p />
            
            </div>
            
            <div className="divConfirmeSenha">
                <label className = "labelConfirmeSenha"> Confirme sua Senha:  </label><p />
                <input className="inputConfirmeSenha" placeholder="Confirme sua senha: "></input>

            </div>

            <div>
                <button className="buttonCriarConta">Criar Conta</button>


            </div>

            

        </div>
        

        

    )

}

export default TelaCadastro;