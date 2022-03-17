import Layout from "../../components/layout/Layout";
import CardForm from "../../components/users/CardForm";

export default function Add() {
  return (
    <Layout title="Adicionar/Atualizar Usuário">
      <div className="row justify-content-center">
        <CardForm />
      </div>
    </Layout>
  )
}