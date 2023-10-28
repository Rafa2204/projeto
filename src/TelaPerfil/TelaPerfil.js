import '../TelaPerfil/TelaPerfil.css'
import im from '../img/SubirEnvio.png'
import imLogo from '../img/Logo.png'
import imEstrela from '../img/estrela.png'
import imPerfil from '../img/perfil.png'
// import imLike from '../img/like.png'
// import imDesLike from '../img/deslike.png'
// import imComentario from '../img/comentario.png'
// import imMapa from '../img/mapa.png'


const TelaPerfil = () => {

    const ButtonVaiTelaPerfil = () => {
        const localhostURL = 'http://localhost:3000/Perfil';
            window.open(localhostURL, 'blank')
    }

    return(
        <div className="TelaPerfil">{/* abre TelaPerfil */}
     

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
        


            {/* ////////////////////////////// */}

            <div className='NomeUsuario'>
                <div className='FotoPerfilUsuario'>
                    <button></button>
                </div>

                <div className='NomeUsuarioH1'>
                    <h1>Nome Usuario</h1>
                </div>

                <div className='ButtonEditarPerfil'>
                    <button>Editar Perfil</button>
                </div>

            </div>
            <div className='SuasPublicacoes'>
                <h1>Suas Publicações</h1>

            </div>
            
            
            <div className='PublicacoesTelaPerfil'>

            </div>


        </div>  //{/* fecha TelaPerfil */}

    )    
}
export default TelaPerfil