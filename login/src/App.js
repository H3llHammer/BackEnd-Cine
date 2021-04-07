import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const [image , setImagen] = useState(null);

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      //setData(res.data);
      const { username } = res.data;
      setData(username);
    });
  };

  const logout = () => {
    axios({
      method: "DELETE",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      console.log(res);
    });
  };

  const imagen = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/peliculas/1",
    }).then((res) => {
      const { Imagen } = res.data;
      console.log(Imagen);
      const base64String = btoa(String.fromCharCode(...new Uint8Array(Imagen.data)));
      setImagen(base64String);
    });
  }

  return (
    <div className="App">
      <div className="register">
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1>Get user</h1>
        <button onClick={getUser}>Usuario</button>
        {data ? <h1>Bienvenido {data} a la Pantallona</h1> : null}
      </div>
      <div>
        <button onClick={logout}>log out</button>
      </div>

      <button onClick={imagen}>Imagen</button>
      <img src={`data:image/jpeg;base64,${image}`} alt=""/>

    </div>
  );
}

export default App;
