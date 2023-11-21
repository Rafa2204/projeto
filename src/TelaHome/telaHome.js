import styles from "../TelaHome/telaHome.module.css"
import im from '../img/SubirEnvio.png'
import imLogo from '../img/Logo.png'
import imEstrela from '../img/estrela.png'
import imPerfil from '../img/perfil.png'
import imLike from '../img/like.png'
import imDesLike from '../img/deslike.png'
import imComentario from '../img/comentario.png'
import imMapa from '../img/mapa.png'

const TelaHome = () => {

    const ButtonSubirPublicacao = () => {
        const localhostURL = 'http://localhost:3000/TelaCriarPublicacao';
            window.open(localhostURL, 'blank')
    }
    const ButtonVaiTelaEditarPerfil = () => {
        const localhostURL = 'http://localhost:3000/EditarPerfil';
            window.open(localhostURL, 'blank')
    }

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
                    <label>** Nome do Usuario **</label>
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

        </div>

        
    )

}
export default TelaHome;