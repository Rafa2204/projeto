import '../TelaEditarPerfil/TelaEditarPerfil.css'

import imPerfil from '../img/perfil.png'
import imLogo from '../img/Logo.png'

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import api from '../TelaLogin/ApiTokenConfiguration';
import Cidadao from '../TelaHome/Cidadao';


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




    // const [name, setName] = useState([]);
    const [name, setName] = useState({ name: '' });
    const [nameUser, setNameUser] = useState([' ']);
    const token = localStorage.getItem('token');

    const data = {
        name: name,
        
        
    };

    // axios.get('http://localhost:8080/cidadao', {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // })
    // .then(response => {
    //     // Seu código de manipulação de resposta aqui
      
    // })
    //   .catch(error => {
    //     console.error('Erro na requisição:', error);
    // });


    //Fazer a requisição à API
    // const deletecidadao = () =>{
    //     try{
    //         api.delete(`http://localhost:8080/cidadao`)
    //         // BTelaCadastro()
    //     }catch (error) {
    //         console.error('Erro ao apagar:', error);
    //         console.log("teste apagar")


    //     }


    // }
    
    // const Cidadao = ({ cidadao }) => {
    //         return(
    //           <p> {cidadao.nameUser} </p>  
    //         )
            
        
        
    //     }
        
  


    useEffect(() => {
        api.get('http://localhost:8080/cidadao/1')
    .then(response => {
      const cidadao = response.data;
      console.log(response)
      setNameUser({ id: cidadao.id, name: cidadao.name });
    })
    .catch(error => {
      console.error('Erro ao obter o nome:', error);
    });
    }, []);


        // Fazer a requisição à API para obter o Nome
        // api.get('http://localhost:8080/cidadao')
        //     .then(response => {
        //         const cidadao = response.data;
        // console.log(response)
        // setNameUser({ nameUser: cidadao.name})
        //     // setName(response.data);
        // })
        //   .catch(error => {
        //     console.error('Erro ao obter o nome:', error);
        //   });
        // }, []);
    



    return(
        <div className='DivPrincipalEditarPerfil'>  {/* abre div Principal */}

            <div>
                <img 
                    className='imLogo'
                    src={imLogo}  >
                </img> 
            </div>

            <div>
                <h1 className='H1EditandoSeuPerfil'>Editando seu Perfil</h1>
            </div>
           
            

            <div className='MudarNomeUsuario2'>
                {/* <h3 className='H3MudarNomeUsuario'>Mudar nome de Usuario</h3> */}
                <h3> Usuario:</h3>
                <div className='MudarNomeUsuario'>
                    
                    <label>         
                        <Cidadao cidadao={nameUser} 
                            key={nameUser.id}/>       
                    </label><p />

                </div>
                
                
                {/* <input 
                    value={nameUser.name} // Utilize o valor do estado para pré-preencher o campo
                    onChange={(e) => setNameUser({  name: e.target.value })} // Atualize o estado ao digitar
                    
                    className='inputMudarNomeUsuario'
                    placeholder=' Adicione um Nome de Usuario'>
                </input> */}
                
            </div>  <p />

            <div>
                <h3 className='H3MudarSenha'>Mudar Senha:</h3>
                {/* <label className='labelSenhaAtual'>Senha Atual:</label> <p /> */}
                <input type='password' placeholder=' Insira sua Senha Atual:' className='InputSenhaAtual'></input> <p />
                <h3 className='labelNovaSenha'>Nova Senha:</h3> <p />
                <input type='password' placeholder=' Insira sua Nova Senha:' className='InputNovaSenha'></input>
            </div>

{/* //////////////////////////////////////// */}


            <div className='divCentralizarButton'>

                <div className='ButtonSalvarAlteracoes'>
                    <button onClick={ButtonVaiTelaHome}>Salvar Alterações</button>
                </div>
                
                <div className='ButtonCancelar'>
                    <button onClick={ButtonVaiTelaHome}>Cancelar</button>
                </div>

                <div className='ButtonExcluirSeuPerfil'>
                    <button>
                     {/* onClick={deletecidadao}>Excluir seu Perfil */}
                    </button>
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