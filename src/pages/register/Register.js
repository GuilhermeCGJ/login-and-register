import React from 'react'
import { Link } from 'react-router-dom';

function Register () {
  return (
    <div className='form'>
      <section id="login-page">
        <form>
          <div>
          <div>
              <h5>Nome</h5>
              <input
                name="name"
                type="name"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div>
            <h5>Sobrenome</h5>
              <input
                name="surname"
                type="surname"
                placeholder="Digite seu sobrenome"
                required
              />
            </div>
            <div>
              <h5>Usuário</h5>
              <input
                name="user"
                type="user"
                placeholder="Digite seu nome de usuário"
                required
              />
            </div>
            <div>
              <h5>Email</h5>
              <input
                name="email"
                type="email"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div>
              <h5>Data de Nascimento</h5>
              <input
                type='birthdate'
                name='birthdate'
                placeholder='Sua data de nascimento'
              />
            </div>
            <div>
              <h5>Email</h5>
              <input
                name="password"
                type="password"
                placeholder="Digite uma senha"
                required
              />
            </div>
            <div>
              <h5>Repita seu Email</h5>
              <input
                name="confirm-password"
                type="confirm-password"
                placeholder="Repita sua senha"
                required
              />
            </div>
            <div>
              <button
                type="button"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
        <p>
          Já tem uma conta? <Link to="/">Logar</Link>
        </p>
      </section>
    </div>
  )
}

export default Register;