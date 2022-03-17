import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Form() {

  const router = useRouter();
  const [user, setUser] = useState({});

  const {id: userId} = router.query;
  
  useEffect(() => {
    console.log(userId);
    //if (userId) {
      //setUser({... user});
    //}
  }, [userId]);

  const handleInputChange = (event) => {
    const {id, value} = event.target;
    setUser({...user, [id]: value});
  }

  const submit = (event) => {
    event.preventDefault();
    toast.success('Salvo com sucesso!');
    console.log(user);
  }

  return (
    <form className="row justify-content-center" onSubmit={submit}>
      <input className="form-control mb-3" type="text" placeholder="Nome" required id="name" onChange={handleInputChange}/>
      <input className="form-control mb-3" type="email" placeholder="E-mail" required id="email" onChange={handleInputChange}/>
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
      <ToastContainer />
    </form>
  )
}