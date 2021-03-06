import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.scss'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

function Register() {
  const [incidents, setIncidents] = useState([])
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')
  const history = useHistory()

  useEffect(()=>{
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      console.log(response.data)
      setIncidents(response.data)
    })
  },[ongId])

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })
      setIncidents(incidents.filter(e => e.id !== id))
    } catch (error) {
      alert('Falha ao deletar caso.')
      console.log('Erro: ', error)
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>
        <Link className='button' to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button className="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {
          incidents.map((item) =>
            <li key={item.id}>
              <strong>CASO:</strong>
              <p>{item.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{item.description}</p>

              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)}</p>

              <button type="button" onClick={() => handleDelete(item.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li> 
          )
        }
      </ul>
    </div>
  );
}

export default Register;
