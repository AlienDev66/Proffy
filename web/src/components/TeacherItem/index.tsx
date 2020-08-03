import React from 'react';

import './style.css';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";


function TeacherItem () {
  return(
    <article className="teacher-item">
    <header>
      <img
        src="https://avatars1.githubusercontent.com/u/59874434?s=460&u=7f9f2e1809bb5e4f30cbe000a56b65290c317616&v=4"
        alt="AlienDev66"
      />
      <div>
        <strong>Domingos Capitango</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      {" "}
      Entusdiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratórioas e por mudar a vida
      das pessoas através de experiências. Mais de 200 alunos já foram
      alvos de minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contacto
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;