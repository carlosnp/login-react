import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  /**
   * Actualiza la variable del correo
   * @param {*} event 
   */
  const handleEmailChange = ({target: {value}}) => {
    setEmail(value);
  };
  /**
   * Actualiza la variable de la contraseña
   * @param {*} event 
   */
  const handlePasswordChange = (event) => {
    setPass(event.target.value);
    event.preventDefault();
  };
  /**
   * Obtiene los datos del formulario
   * @param {*} event 
   */
  const handleSubmit = (event) => {
    const data = new FormData(event.target);
    /** Datos del formulario */
    const formObject = Object.fromEntries(data.entries());
    console.log('formObject', formObject);
    event.preventDefault();
  };
  /**
   * Limpia el formulario
   * @param {*} event 
   */
  const cleanAll = (event)=>{
    setEmail('');
    setPass('');
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar sesion</h2>
        <label htmlFor="email">
          Correo
          <input type="email" name="Correo" id="email"
            onChange={handleEmailChange}
            value={email || ''}
          />
        </label>
        <label htmlFor="password">
          Contraseña
          <input type="password" name="Contraseña" id="password"
            onChange={handlePasswordChange}/>
        </label>
        <button type="submit">Continuar</button>
        <button type="button" onClick={cleanAll}>Limpiar</button>
      </form>
      <div>Correo: {email}</div>
      <div>Contraseña: {pass}</div>
    </div>
  );
}

export default App;
