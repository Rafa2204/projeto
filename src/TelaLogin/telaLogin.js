import styles from "../TelaLogin/telaLogin.module.css"
import logo from '../img/Logo.png'
import Home from '../TelaHome/telaHome'
import React, { useState, useEffect } from 'react';
import olho  from '../img/olho.png'
import axios from 'axios';

const TelaLogin = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);
  
  
    const postUser = async () => {
      const data = {
        email: email,
        senha: senha,
    
      };
  
      try {
        const response = await axios.get('http://localhost:8080/cidadao', data);
        console.log('Usuário criado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }
    };
  
    useEffect(() => {
      postUser();
      console.log("foi")
    }, []); 


    const BTelaLogin = () => {
        const localhostURL = 'http://localhost:3000/Home';
            window.open(localhostURL, 'blank')
    }

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
      };

    return(
        <div className={styles.divPrincipal}>

            <div className={styles.divLogo}>   
                <img src={logo} /> 
            </div>

            
            <div className={styles.h1}>
                <h1>Tela de Login</h1>
            </div>

            <div className={styles.divEmailLogin}>
                <label 
                    className = {styles.labelEmailLogin}> Email:  
                </label><p />
                
                <input
                    // value={email} 
                    // onChange={(e) => setEmail(e.target.value)}  
                    className={styles.inputEmailLogin} 
                    placeholder="Digite seu Email: ">
                </input><p />
                
                
            </div>
                
            <div className={styles.divSenhaLogin}>
                <label className = {styles.labelSenhaLogin}> Senha:  </label><p />
                <input 
                    // value={senha} 
                    // onChange={(e) => setSenha(e.target.value)} 
                    className={styles.inputSenhaLogin} 
                    placeholder="Digite sua senha: "
                    type={mostrarSenha ? 'text' : 'password'} >
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

            <div>
                <button className={styles.buttonEntrar} onClick={BTelaLogin}>Entrar</button>

            </div>



            <div className={styles.CadastreseLogin}>
                <label>Novo no site?</label>
                <button> Cadastre-se</button>
            </div>

            <div className={styles.funcionarioPrefeituraLogin}>
                
            </div>


     
            
        </div>

       
    )
}
export default TelaLogin