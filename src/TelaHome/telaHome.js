import telaHome from "../TelaHome/telaHome.css"
import im from '../img/SubirEnvio.png'
import imLogo from '../img/Logo.png'
import imEstrela from '../img/estrela.png'
import imPerfil from '../img/perfil.png'
import imLike from '../img/like.png'
import imDesLike from '../img/deslike.png'
import imComentario from '../img/comentario.png'
import imMapa from '../img/mapa.png'

const TelaHome = () => {

    return(
        <div> {/* abre divCabeçalho */}

            <div className="cabecalho">
                <div className="imLogo">
                    <img src={imLogo}  ></img> 
                </div>
            
                <div className="buttonSubir">
                    <button >
                        <img src={im}></img>   
                    </button>            
                </div>
                <label className="labelDestaque">Publicar</label>


                <div className="buttonDestaque">
                    <button>
                        <img src={imEstrela}></img>
                    </button> 
                </div>
                <label className="labelEstrela">Destaque</label>


                <div className="buttonPerfil">
                    <button>
                        <img src={imPerfil}></img>
                    </button> 
                </div>
                <label className="labelPerfil">Perfil</label>

            </div> {/* fecha divCabeçalho */}

            {/* ////////////////// */}

            <div > {/* abre divCorpo */}
           
            <div className="divCorpo">
                <div>
                    <button className="buttonPerfilUsuario"></button>
                </div>

                <div className="labelNomeUsuario">
                    <label>** Nome do Usuario **</label>
                </div>
                
                <div className="divRodaPeCorpo1">

                    <div className="divButtonLike">
                        <button className="buttonLike"> 
                            <img src={imLike}></img>
                        </button>
                    </div>

                    <div className="divButtonDesLike">
                        <button className="buttonDesLike">
                            <img src={imDesLike}></img>
                        </button>
                    </div>

                    <div className="divButtonComentar">
                        <button>
                            <img src={imComentario}></img>
                        </button>
                    </div>

                    <div className="divButtonMapa">
                        <button >
                            <img src={imMapa}></img>
                        </button>
                    </div>

                </div>

            </div>

            <div className="divCorpo2">
                <button> </button>
                <label>Nome do Usuario</label>
            </div>

            </div> {/* fecha divCorpo */}

        </div>

        
    )

}
export default TelaHome;