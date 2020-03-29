import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.scss'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

function NewIncident() {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [value, setvalue] = useState('')
  const ongId = localStorage.getItem('ongId')

  async function handleCreate(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value
    }
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
      settitle('')
      setdescription('')
      setvalue('')
      alert(`Caso ${title} cadastrado. Boa sorte!`)

    } catch (error) {
      console.log('Erro: ', error)
      alert('Ops, algo deu errado.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso,</p>
          <Link className='back-link' to="/profile">
            <FiArrowLeft size={18} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleCreate}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => settitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setdescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setvalue(e.target.value)}
          />
          <button className="button" type="submit" >Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
