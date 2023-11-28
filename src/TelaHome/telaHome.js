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

// import React, { useState, useEffect } from 'react';
// import api from '../TelaLogin/ApiTokenConfiguration';

const TelaHome = () => {

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
        // Fazer a requisição à API para obter a lista de publicações
        api.get('http://localhost:8080/publicacao')
          .then(response => {
            setPublicacoes(response.data);
          })
          .catch(error => {
            console.error('Erro ao obter a lista de publicações:', error);
          });
      }, []);



    return(
        <div className={styles.divPrincipal}> {/* abre divCabeçalho */}

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
                    <button>
                        <img src={imEstrela}></img>
                    </button> 
                </div>
                <label className={styles.labelEstrela}>Destaque</label>


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
                <div>
                    <button className={styles.buttonPerfilUsuario}></button>
                </div>

                <div className={styles.labelNomeUsuario}>
                <div>
                    <ul className={styles.labelNomeUsuario}>
                        {publicacoes.map(publicacao => (
                            <li key={publicacao.id}>
                                <strong>{publicacao.citizen}
                                </strong>
                            </li>
                        ))}
                    </ul>


                    <ul className={styles.ulTexto}>
                        {publicacoes.map(publicacao => (
                            <li key={publicacao.id}>
                                <strong></strong>{publicacao.textoPublicacao}
                            </li>
                        ))}
                    </ul>
                    

                </div>


                </div>
                
                <div className={styles.divRodaPeCorpo1}>

                    <div className={styles.divButtonLike}>
                        <button className={styles.buttonLike}> 
                            <img src={imLike}></img>
                        </button>
                    </div>

                    <div className={styles.divButtonDesLike}>
                        <button className={styles.buttonDesLike}>
                            <img src={imDesLike}></img>
                        </button>
                    </div>

                    <div className={styles.divButtonComentar}>
                        <button>
                            <img src={imComentario}></img>
                        </button>
                    </div>

                    <div className={styles.divButtonMapa}>
                        <button >
                            <img src={imMapa}></img>
                        </button>
                    </div>

                </div>

            </div>

            <div className={styles.divCorpo2}>
                <button> </button>
                <label>Nome do Usuario</label>
            </div>

            </div> {/* fecha divCorpo */}

            <div>
            <input
                    // value={textoPublicacao} 
                    // onChange={(e) => setTextoPublicacao(e.target.value)}  
                    >
                </input><p />

            </div>

            

        </div>

        
    )

}
export default TelaHome;


// Recuperar token do localStorage


