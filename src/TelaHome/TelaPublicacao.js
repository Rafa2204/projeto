// Publicacao.js
import React from 'react';
import styles from './telaHome.module.css';
import imLogo from '../img/Logo.png'

const Publicacao = ({ publicacao }) => {
  return (


    <article className={styles.publicacao}>
      <div className={styles.cabecalhoPublicacao}>
        <img className={styles.imagemPerfil2} /*src={publicacao.imagemPerfil}*/ src={imLogo} alt=" " />
        <p className={styles.nomeUsuario}> {publicacao.citizen}:</p>
      </div>
      <p className={styles.textoPublicacao}>{publicacao.textoPublicacao}</p>
      {/* Adicione outros elementos, como botões de like, deslike, etc. */}
    </article>
  );
};

export default Publicacao;
