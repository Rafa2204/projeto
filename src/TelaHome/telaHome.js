import styles from "../TelaHome/telaHome.module.css"
import im from '../img/SubirEnvio.png'
import imLogo from '../img/Logo.png'
import imEstrela from '../img/estrela.png'
import imPerfil from '../img/perfil.png'
import imLike from '../img/like.png'
import imDesLike from '../img/deslike.png'
import imComentario from '../img/comentario.png'
import imMapa from '../img/mapa.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from "../TelaLogin/ApiTokenConfiguration"
import Publicacao from './TelaPublicacao'

// import React, { useState, useEffect } from 'react';
// import api from '../TelaLogin/ApiTokenConfiguration';

const TelaHome = () => {





    
    const ButtonAtualizaTela = () => {
        const localhostURL = 'http://localhost:3000/Home';
            window.open(localhostURL, 'blank')
    }
    const ButtonSubirPublicacao = () => {
        const localhostURL = 'http://localhost:3000/TelaCriarPublicacao';
            window.open(localhostURL, 'blank')
    }
    const ButtonVaiTelaEditarPerfil = () => {
        const localhostURL = 'http://localhost:3000/EditarPerfil';
            window.open(localhostURL, 'blank')
    }



    const [publicacoes, setPublicacoes] = useState([]);
    const token = localStorage.getItem('token');
    const [publicacao, setPublicacao] = useState('');



    // Fazer a requisição à API
    api.get('http://localhost:8080/publicacao')
    .then(response => {
    const publicacao = response.data;
    console.log(publicacao)
    })
    .catch(error => {
    console.error('Erro ao obter informações da publicação:', error);
    });



    useEffect(() => {

        //////////////////////////////

    //     const response = api.post('http://localhost:8080/cidadao',);
    //   var image = api.post(`http://localhost:8080/cidadao/photo/${response.data.id}`, {
    //         formData
    //       }, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data'
    //         }
    //       })

    //   try {
        
    //     console.log('Usuário criado com sucesso:', response.data);
    //     var formData = new FormData();
    //     var imagefile = document.querySelector('#file');
    //     formData.append("image", imagefile.files[0]);
        
    //     const image = axios.post(`http://localhost:8080/cidadao/photo/${response.data.id}`, {
    //       formData
    //     }, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     })
       
    //   } catch (error) {
    //     console.error('Erro ao criar usuário:', error);
    //     console.log("teste trycat")
    //   }
      




        /////////////////////////////


        // Fazer a requisição à API para obter a lista de publicações
        api.get('http://localhost:8080/publicacao')
          .then(response => {
            setPublicacoes(response.data);




            ///////////

            


          })
          .catch(error => {
            console.error('Erro ao obter a lista de publicações:', error);
          });
          
      }, []);
      
      


    return(
        <div className={styles.divPrincipal}> {/* abre Principal */}

            <div className={styles.cabecalho}>
                <div className={styles.imLogo}>
                    <img src={imLogo}  ></img> 
                </div>
            
                <div className={styles.buttonSubir}>
                    <button onClick={ButtonSubirPublicacao}>
                        <img src={im}></img>   
                    </button>            
                </div>
                <label className={styles.labelDestaque}>Publicar</label>


                <div className={styles.buttonDestaque}>
                    <button onClick={ButtonAtualizaTela}> 
                        <img src={imEstrela}></img>
                    </button> 
                </div>
                <label className={styles.labelEstrela}>Atualizar</label>


                <div className={styles.buttonPerfil}>
                    <button onClick={ButtonVaiTelaEditarPerfil}>
                        <img src={imPerfil}></img>
                    </button> 
                </div>
                <label className={styles.labelPerfil}>Perfil</label>

            </div> {/* fecha divCabeçalho */}

                {/* ////////////////// */}

            <div > {/* abre divCorpo */}
           
                <div className={styles.divCorpo}>

                    <div className={styles.labelNomeUsuario}>

                        <div>
                            <ul className={styles.ulPublicacoes}>
                                {publicacoes.map(publicacao => (
                                    <Publicacao key={publicacao.id} 
                                    publicacao={publicacao} />
                                ))}
                            </ul>

                        </div>
    
                    </div>
                    
                </div> {/* fecha divCorpo */}



                

            </div> {/* Fecha divCorpo */}

            




        
            


        </div>  /* { Fecha Principal }*/  
    )
}
export default TelaHome;


// Recuperar token do localStorage


