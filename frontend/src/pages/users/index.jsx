import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import Table from '../../components/users/Table'

export default function Users() {
  return (
    <Layout title="Usuários">
      <div className="row mb-3 justify-content-center">
        <Link href={'users/add'}>
          <button className="btn btn-primary col-2">Novo Usuário</button>
        </Link>
      </div>
      <Table />
    </Layout>
  )
}