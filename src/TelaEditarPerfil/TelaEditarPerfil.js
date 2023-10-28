import '../TelaEditarPerfil/TelaEditarPerfil.css'

import imPerfil from '../img/perfil.png'
import imLogo from '../img/Logo.png'

const TelaEditarPerfil = () => {

    const ButtonVaiTelaEditarPerfil = () => {
        const localhostURL = 'http://localhost:3000/Editar/Perfil';
            window.open(localhostURL, 'blank')
    }

    return(
        <div className='DivPrincipalEditarPerfil'>  {/* abre div Principal */}

            <div>
                <h1>Editando seu Perfil</h1>
            </div>
            <div>
                <h3>Adicionar uma nova Foto</h3>
            </div>
            <div className='ButtonAddFoto'>
                <button>
                   
                </button>
            </div>

            <div>
                <h3>Mudar nome de Usuario</h3>
                <input></input>
            </div>

            <div>
                <h3>Mudar Senha:</h3>
                <label>Senha Atual:</label> <p />
                <input></input> <p />
                <label>Nova Senha:</label> <p />
                <input></input>
            </div>

{/* //////////////////////////////////////// */}


            <div className='divCentralizarButton'>

                <div className='ButtonSalvarAlteracoes'>
                    <button>Salvar Alterações</button>
                </div>
                
                <div>
                    <button>Cancelar</button>
                </div>

                <div>
                    <button>Excluir seu Perfil</button>
                </div>



            </div>

            



        </div>  //{/* fecha div Principal */}

    )
}
export default TelaEditarPerfil