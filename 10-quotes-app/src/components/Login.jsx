function Login () {
  return (
    <div className='container'>
      <div className='login-box'>
        <h4 className='login-title'>Ingresar</h4>
        <form action='POST'>
          <label id='user-name-label' htmlFor='user-name'>Usuario</label>
          <input className='form-control me-2' name='user-name' type='text' placeholder='Usuario' id='user-name' />
          <label htmlFor='password'>Contraseña</label>
          <input className='form-control me-2' name='password' type='password' placeholder='Contraseña' id='password' />
          <label htmlFor='remember'>Recuérdame
            <input type='checkbox' name='remember' id='remember' />
          </label>
          <button className='btn btn-outline-success' type='submit'>Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login
