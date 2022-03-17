import Form from "./Form";

export default function CardForm() {
  return (
    <div className="mt-4 card shadow" style={{width: '30em', backgroundColor: 'rgb(208, 217, 225)'}}>
      <div className="card-body">
        <Form />
      </div>
    </div>
  )
}