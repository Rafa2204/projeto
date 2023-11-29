import style from '../TelaCriarPublicacao/TelaCriarPublicacao.module.css'
import im from '../img/SubirEnvio.png'
import imMapa from '../img/mapa.png'
import React, { useEffect, useState } from 'react';
import imLogo from '../img/Logo.png'

import api from '../TelaLogin/ApiTokenConfiguration';
import Publicacao from '../TelaHome/TelaPublicacao'



const TelaCriarPublicacao = () => {


    const [textoPublicacao, setTextoPublicacao] = useState('');

    const BTelaHome = () => {
        const localhostURL = 'http://localhost:3000/Home';
            window.open(localhostURL, 'blank')
    }
    
    const [publicacoes, setPublicacoes] = useState([]);


        const postPub = async () => {
            const data = {
                textoPublicacao: textoPublicacao,
                
            };

            // const Validaçao
    
            try {
                const response = await api.post('http://localhost:8080/publicacao', data);
                console.log('dados salvo', response.data.texto);
                BTelaHome()
                // if (response.data.token) {
                //     console.log("comparo")
                //     localStorage.setItem('token', response.data.token);
                //     // Redirecionar para a próxima página
                    
                // } else {
                //     console.log('Login falhou. Mensagem do servidor:', response.data.mensagem);
                // }

                


            } catch (error) {
                console.error('Erro ao salvar', error);
            }

        }

        

    useEffect(() => {
        console.log("foi")
    
    }, []); 


    return(
        <div className={style.DivPrincipalTelaCriarPublicacao}>
            <div className={style.ButtonAddFoto}>
                
                <img src={imLogo}  ></img> 
                

                <h1>Nome Usuario</h1>

                <ul className=" ">
                    {publicacoes.map(publicacao => (
                        <Publicacao key={publicacao.id} publicacao={publicacao} />
                    ))}
                </ul>
            </div>

            <div className={style.divInput}>
                <input placeholder='Digite aqui sua novidade...'
                value={textoPublicacao} 
                onChange={(e) => setTextoPublicacao(e.target.value)}  ></input>


            </div>

            <div className={style.divButtonInferiores}>

                <div className={style.divButtonEnvioDeImagens}>
                    <button>
                        <img className={style.imagemSubir} src={im}></img>
                    </button>

                </div>
                
                <div
                className={style.divButtonPublicar}>
                    <button onClick={postPub}>Publicar</button>
                </div>



          

            </div>


            

           
        
        
        </div>
    )

}
export default TelaCriarPublicacao;
    