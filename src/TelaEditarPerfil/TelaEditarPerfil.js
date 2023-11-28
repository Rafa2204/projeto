import '../TelaEditarPerfil/TelaEditarPerfil.css'

import imPerfil from '../img/perfil.png'
import imLogo from '../img/Logo.png'

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import api from '../TelaLogin/ApiTokenConfiguration';

const TelaEditarPerfil = () => {

    const ButtonVaiTelaEditarPerfil = () => {
        const localhostURL = 'http://localhost:3000/Editar/Perfil';
            window.open(localhostURL, 'blank')
    }

    const ButtonVaiTelaHome = () => {
        const localhostURL = 'http://localhost:3000/Home';
            window.open(localhostURL, 'blank')
    }
    const BTelaCadastro = () => {
        const localhostURL = 'http://localhost:3000/Cadastro';
          window.open(localhostURL, 'blank')
    }




    const [name, setName] = useState([]);

    //Fazer a requisição à API
    const deletecidadao = () =>{
        try{
            api.delete(`http://localhost:8080/cidadao`)
            BTelaCadastro()
        }catch (error) {
            console.error('Erro ao apagar:', error);
            console.log("teste apagar")


        }
    }
    


    useEffect(() => {
        // Fazer a requisição à API para obter a lista de publicações
        axios.get('http://localhost:8080/cidadao')
          .then(response => {
            setName(response.data);
          })
          .catch(error => {
            console.error('Erro ao obter a lista de publicações:', error);
          });
      }, []);
    



    return(
        <div className='DivPrincipalEditarPerfil'>  {/* abre div Principal */}

            <div>
                <h1 className='H1EditandoSeuPerfil'>Editando seu Perfil</h1>
            </div>
            <div>
                <h3 className='H3AdicionarFoto'>Adicionar uma nova Foto</h3>
            </div>
            <div className='ButtonAddFoto'>
                <button>
                   
                </button>
            </div>

            <div>
                <h3 className='H3MudarNomeUsuario'>Mudar nome de Usuario</h3>
                <input 



                className='inputMudarNomeUsuario'
                placeholder=' Adicione um Nome de Usuario'></input>
                
            </div>

            <div>
                <h3 className='H3MudarSenha'>Mudar Senha:</h3>
                <label className='labelSenhaAtual'>Senha Atual:</label> <p />
                <input type='password' placeholder=' Insira sua Senha Atual:' className='InputSenhaAtual'></input> <p />
                <label className='labelNovaSenha'>Nova Senha:</label> <p />
                <input type='password' placeholder=' Insira sua Nova Senha:' className='InputNovaSenha'></input>
            </div>

{/* //////////////////////////////////////// */}


            <div className='divCentralizarButton'>

                <div className='ButtonSalvarAlteracoes'>
                    <button>Salvar Alterações</button>
                </div>
                
                <div className='ButtonCancelar'>
                    <button onClick={ButtonVaiTelaHome}>Cancelar</button>
                </div>

                <div className='ButtonExcluirSeuPerfil'>
                    <button
                    onClick={deletecidadao}>Excluir seu Perfil</button>
                </div>




            </div>

            



        </div>  //{/* fecha div Principal */}

    )
}
export default TelaEditarPerfil




// // Home.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//     // const [publicacoes, setPublicacoes] = useState([]);

// //   useEffect(() => {
// //     // Fazer a requisição à API para obter a lista de publicações
// //     axios.get('sua-url-da-api/publicacoes')
// //       .then(response => {
// //         setPublicacoes(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Erro ao obter a lista de publicações:', error);
// //       });
// //   }, []);

//   return (
//     <div>
//       <h1>Feed de Publicações</h1>
//       {/* <ul>
//         {publicacoes.map(publicacao => (
//           <li key={publicacao.id}>
//             <strong>{publicacao.cidadao.nome}</strong>: {publicacao.texto}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default Home;