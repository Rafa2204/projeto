import '../TelaEditarPerfil/TelaEditarPerfil.css'

import imPerfil from '../img/perfil.png'
import imLogo from '../img/Logo.png'

const TelaEditarPerfil = () => {

    const ButtonVaiTelaEditarPerfil = () => {
        const localhostURL = 'http://localhost:3000/Editar/Perfil';
            window.open(localhostURL, 'blank')
    }

    const ButtonVaiTelaHome = () => {
        const localhostURL = 'http://localhost:3000/Home';
            window.open(localhostURL, 'blank')
    }

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
                <input className='inputMudarNomeUsuario'></input>
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
                    <button>Excluir seu Perfil</button>
                </div>



            </div>

            



        </div>  //{/* fecha div Principal */}

    )
}
export default TelaEditarPerfil