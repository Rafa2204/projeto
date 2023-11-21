

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../img/Logo.png';
import styles from '../TelaCadastro/telaCadastro.module.css';
import olho  from '../img/olho.png'

const TelaCadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
//   const [name, setName] = useState('');
//   const [adress, setAdress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [confirmaSenha, setConfirmacao] = useState('');
const [mostrarSenha, setMostrarSenha] = useState(false);


  const postUser = async () => {
    const data = {
      email: email,
      senha: senha,
    //   name: name,
    //   adress: adress,
    //   phone: phone,
    };

    try {
      const response = await axios.post('http://localhost:8080/cidadao', data);
      console.log('Usuário criado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  useEffect(() => {
    postUser();
    console.log("foi")
  }, []); // Executa apenas uma vez ao montar o componente

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };
 



    return(
        <div className={styles.divPrincipal}>

                <div className={styles.divLogo}>   
                <img src={logo} /> 
            </div>


            <div className={styles.h1}>
                <h1>Tela de cadastro</h1>
            </div>

            <div className={styles.divEmail}>
                <label className = {styles.labelEmail}> Email:  </label><p />
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className={styles.inputEmail} 
                    type='email'
                    placeholder="Digite seu Email: ">
                </input><p />
            
            </div>
            
            <div className={styles.divSenha}>
                <label className = {styles.labelSenha}> Senha:  </label><p />
                <input 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                    className={styles.inputSenha} 
                    type={mostrarSenha ? 'text' : 'password'} 
                    placeholder="Digite sua senha: ">
                </input>
                <button 
                    type="button" 
                    onClick={toggleMostrarSenha}
                    className={styles.imgOlho} >
                    <img
                        src={olho}>
                    </img>   
                    {mostrarSenha ? ' ' : ' '}
                </button><p />
                
            
            </div>
            
            <div className={styles.divConfirmeSenha}>
                <label className ={styles.labelConfirmeSenha}> Confirme sua Senha:  </label><p />
                <input 
                    className={styles.inputConfirmeSenha} 
                    type={mostrarSenha ? 'text' : 'password'}
                    placeholder="Confirme sua senha: ">
                </input>
                <button 
                    type="button" 
                    onClick={toggleMostrarSenha}
                    className={styles.imgOlho}>
                    <img
                        src={olho}>
                    </img>
                    {mostrarSenha ? ' ' : ' ' }
                </button>

            </div>

            <div>
                <button 
                    onClick={postUser}
                    className={styles.buttonCriarConta}>Criar Conta
                </button>

            </div>

            

            

        </div>
        

        

    )

}

export default TelaCadastro;


// import { response } from "express"
// import telaCadastro from "../TelaCadastro/telaCadastro.css"
// import logo from '../img/Logo.png'
// import axios from "axios"
// import { useState,useEffect } from "react"

// const TelaCadastro = () => {

//    const [email, setEmail] = useState("");
//    const [senha, setSenha] = useState("");
//    const [name, setName] = useState("");
//    const [adress, setAdress] = useState("");
//    const [phone, setPhone] = useState("");
//    const [confirmaSenha, setConfirmacao] = useState("");

    

//     const postUser=async()=>{

//     const data ={
//         email: email,
//         senha: senha,
//         confirmaSenha: confirmaSenha,
//         name: name,
//         adress: adress,
//         phone: phone
//     }

//     try {
//         const response = await axios.post('https://localhost:8080/cidadao', data);
//         console.log("Usuário criado com sucesso:", response.data);
//       } 
      
//     catch (error) {
//         console.error("Erro ao criar usuário:", error);
//       }
    

//     useEffect(()=>{
//         getInfo()
//     }, [])

// }


//     const ButtonVaiTelaLogin = () => {
//         const localhostURL = 'http://localhost:3000/Login';
//             window.open(localhostURL, 'blank')
//     }

   

//     return(
//         <div className="divPrincipal">

//             <div className="divLogo">   
//                 <img src={logo} /> 
//             </div>


//             <div className="h1">
//                 <h1>Tela de cadastro</h1>
//             </div>

//             <div className="divNome">
//                 <label className = "labelName"> Nome:  </label><p />
//                 <input className="inputName" placeholder="Digite seu Nome: " value={name} onChange={(e) => setName(e.target.value)}></input><p />
            
//             </div>

//             <div className="divEndereço">
//                 <label className = "labelAdress"> Seu Endereço:  </label><p />
//                 <input className="inputAdress" placeholder="Digite seu Endereço: " value={adress} onChange={(e) => setAdress(e.target.value)}></input><p />
            
//             </div>

//             <div className="divPhone">
//                 <label className = "labelPhone"> Seu Telefone:  </label><p />
//                 <input className="inputPhone" placeholder="Digite seu Telefone: " value={phone} onChange={(e) => setPhone(e.target.value)}></input><p />
            
//             </div>

//             <div className="divEmail">
//                 <label className = "labelEmail"> Email:  </label><p />
//                 <input className="inputEmail" placeholder="Digite seu Email: " value={email} onChange={(e) => setEmail(e.target.value)}></input><p />
            
//             </div>
            
//             <div className="divSenha">
//                 <label className = "labelSenha"> Senha:  </label><p />
//                 <input className="inputSenha" type="password" placeholder="Digite sua senha: " value={senha} onChange={(e) => setSenha(e.target.value)}></input><p />
            
//             </div>
            
//             <div className="divConfirmeSenha">
//                 <label className = "labelConfirmeSenha"> Confirme sua Senha:  </label><p />
//                 <input className="inputConfirmeSenha" type="password" placeholder="Confirme sua senha: " value={confirmaSenha} onChange={(e) => setConfirmacao(e.target.value)}></input>

//             </div>

//             <div>
//                 <button className="buttonCriarConta" onClick={postUser}>Criar Conta</button>


//             </div>

            

            

//         </div>
        

        

//     )

// }

// export default TelaCadastro;

 // const ButtonVaiTelaLogin = () => {
    //     const localhostURL = 'http://localhost:3000/Login';
    //         window.open(localhostURL, 'blank')
    // }






