import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  const [isLog, setIsLog] = useState(false)

  function handleSetIsLog() {
    setIsLog(true);
  }

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (

    <div className="App">
      { }

      {(isLog) ?
        <>
          <BrowserRouter>
            <div className="d-flex justify-content-around align-items-center mt-2">
              <h1 className=''>Bienvenue sur votre espace de gestion</h1>
              {/* Affichage du nom et prenom de l'utilisateur connecté avec un bouton "Se Déconnecter" */}
              <span className='d-flex '>
                <h3 className='mx-2'>{user.prenom} {user.nom}</h3>
                <button className='btn btn-danger mx-2' onClick={() => {
                  localStorage.removeItem('user');
                  setIsLog(false);
                }}>Se déconnecter</button>
              </span>
            </div>
            <Nav />
          </BrowserRouter>
        </>
        :
        <>
          <h1>Projet Final GDA</h1>
          <Login setIsLog={handleSetIsLog} />

          {/* Fait en 2 minutes */}
          <br /><br />
          <table className="table table-bordered container">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr scope="col">
                <td>
                  managerdev@gmail.com
                </td>
                <td>
                  manager
                </td>
                <td>
                  Manager
                </td>
              </tr>
              <tr scope="col">
                <td>
                  pierredev@gmail.com
                </td>
                <td>
                  user
                </td>
                <td>
                  Employé
                </td>
              </tr>
              <tr scope="col">
                <td>
                  admin@gmail.com
                </td>
                <td>
                  admin
                </td>
                <td>
                  Admin
                </td>
              </tr>
            </tbody>
          </table>
        </>
      }

    </div>
  );
}

export default App;
