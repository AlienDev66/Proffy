import React from 'react';

import './style.css';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";


export interface Teacher{
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

export interface TeacherItemProps {
  teacher: Teacher; 
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher })=> {
  return(
    <article className="teacher-item">
    <header>
      <img
        src={teacher.avatar}
        alt={teacher.name}
      />
      <div>
  <strong>{teacher.name}</strong>
  <span>{teacher.subject}</span>
      </div>
    </header>

    <p>
     {teacher.bio}
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>{teacher.cost}</strong>
      </p>
      <a href={`https://wa.me/${teacher.whatsapp}`}>
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contacto
      </a>
    </footer>
  </article>
  );
}

export default TeacherItem;