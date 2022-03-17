import Form from "./Form";

export default function CardForm() {
  return (
    <div className="mt-4 card shadow" style={{width: '30em', backgroundColor: 'rgb(219, 230, 220)'}}>
      <div className="card-body">
        <Form />
      </div>
    </div>
  )
}