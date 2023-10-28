import { response } from "express"
import telaCadastro from "../TelaCadastro/telaCadastro.css"
import logo from '../img/Logo.png'
import axios from "axios"
import { useState,useEffect } from "react"

const TelaCadastro = () => {

   /* const [infoUser, setInfoUser] = useState([])

    const getInfo=async()=>{

    const response = await axios.post('https://localhost:8080')
    const data = response.data
    console.log(data)

    setInfoUser(data)
    }

    useEffect(()=>{
        getInfo()
    }, [])*/

    const ButtonVaiTelaLogin = () => {
        const localhostURL = 'http://localhost:3000/Login';
            window.open(localhostURL, 'blank')
    }

   

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
                <input className="inputSenha" type="password" placeholder="Digite sua senha: "></input><p />
            
            </div>
            
            <div className="divConfirmeSenha">
                <label className = "labelConfirmeSenha"> Confirme sua Senha:  </label><p />
                <input className="inputConfirmeSenha" type="password" placeholder="Confirme sua senha: "></input>

            </div>

            <div>
                <button className="buttonCriarConta" onClick={ButtonVaiTelaLogin}>Criar Conta</button>


            </div>

            

            

        </div>
        

        

    )

}

export default TelaCadastro;