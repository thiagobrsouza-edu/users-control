import Link from "next/link";
import { useState } from "react";

export default function Form() {

  const [user, setUser] = useState({});

  const handleInputChange = (event) => {
    const {id, value} = event.target;
    setUser({...user, [id]: value});
  }

  const submit = (event) => {
    event.preventDefault();
    console.log(user);
  }

  return (
    <form className="row justify-content-center" onSubmit={submit}>
      <input className="form-control mb-3" type="text" placeholder="Nome" required id="name" onChange={handleInputChange}/>
      <input className="form-control mb-3" type="text" placeholder="Usuário" required id="username" onChange={handleInputChange}/>
      <input className="form-control mb-3" type="password" placeholder="Senha" required id="password" onChange={handleInputChange}/>
      <select className="form-select mb-3" required id="profile" onChange={handleInputChange}>
        <option value="">Selecione um perfil</option>
        <option value="administrator">Administrador</option>
        <option value="default">Padrão</option>
        <option value="readOnly">Leitura</option>
      </select>
      <button type="submit" className="btn btn-primary mb-3">Submit</button>
      <Link href={"/users"}>
        <button className="btn btn-warning">Cancelar</button>
      </Link>
    </form>
  )
}