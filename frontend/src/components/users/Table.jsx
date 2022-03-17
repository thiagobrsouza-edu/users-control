export default function Table() {

  const users = [
    {id: 1, name: 'Thiago', username: 'func01', profile: 'Admin'},
    {id: 2, name: 'Yasmin', username: 'func02', profile: 'Padrão'},
    {id: 3, name: 'Laura', username: 'func03', profile: 'Padrão'},
    {id: 4, name: 'Pedro', username: 'func05', profile: 'Leitura'},
  ]

  return (
    <div>
      <table className="table table-hover table-sm">
        <thead className="table-secondary">
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Perfil</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.profile}</td>
                <td>
                  <button className="btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                  <button className="ms-1 btn btn-danger"><i className="bi bi-trash-fill"></i></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}