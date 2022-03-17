import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Navbar />
      <article className="mt-3 container">
        <h1 className="mt-3 text-center display-6">{title}</h1>
        {children}
      </article>
    </>
  )
}