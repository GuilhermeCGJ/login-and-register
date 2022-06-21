import React from 'react'
import { Link } from 'react-router-dom';

function Login () {
  return (
    <section id="login-page">
      <form>
        <div>
          <div>
            <input
              name="user"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div>
            <button
              type="button"
            >
              Logar
            </button>
          </div>
        </div>
      </form>
      <p>
        Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </section>
  )
};

export default Login;