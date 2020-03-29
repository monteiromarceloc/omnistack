import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.scss'
import api from '../../services/api';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Login() {
  const [id, setid] = useState('')

  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id })
      localStorage.setItem('ongName', response.data.name)
      localStorage.setItem('ongId', id)
      history.push('/profile')
    } catch (error) {
      alert('Ops, algo deu errado.');
      console.log('Erro ao registrar: ', error)
    }
  }

  return (
    <div className="login-container">
      <section className="form">
      <img src={logoImg} alt="Be the Hero"/>
      <form onSubmit={handleLogin}>
        <h1>Faça seu login</h1>
        <input
          placeholder="Sua ID"
          value={id}
          onChange={e => setid(e.target.value)}
        />
        <button className="button" type="submit">Entrar</button> 
        <Link className='back-link' to="/register">
          <FiLogIn size={18} color="#e02041" />
          Não tenho cadastro
        </Link>
      </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}

export default Login;
