import style from '../TelaCriarPublicacao/TelaCriarPublicacao.module.css'
import im from '../img/SubirEnvio.png'
import imMapa from '../img/mapa.png'




const TelaCriarPublicacao = () => {

    const ButtonVaiTelaCriarPublicacao = () => {
        const localhostURL = 'http://localhost:3000/TelaCriarPublicacao';
            window.open(localhostURL, 'blank')
    }

    return(
        <div className={style.DivPrincipalTelaCriarPublicacao}>
            <div className={style.ButtonAddFoto}>
                <button>
                   
                </button>

                <h1>Nome Usuario</h1>
            </div>

            <div className={style.divInput}>
                <input placeholder='Digite aqui sua novidade...'></input>


            </div>

            <div className={style.divButtonInferiores}>

                <div className={style.divButtonEnvioDeImagens}>
                    <button>
                        <img className={style.imagemSubir} src={im}></img>
                    </button>

                </div>


                <div>
                    <div className={style.divImagemMapa}>
                        <button className={style.buttonMapa} >
                            <img className={style.imagemImMapa} src={imMapa}></img>   
                        </button>            
                    </div>

            
                </div>

                
                <div className={style.divButtonPublicar}>
                    <button>Publicar</button>
                </div>



          

            </div>


            

           
        
        
        </div>
    )

}
export default TelaCriarPublicacao;
    