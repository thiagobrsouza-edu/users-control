import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <Link href={'/'}>
          <a className="navbar-brand">User Control - APP <i className="ms-3 bi bi-people-fill"></i></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0 p-3">
            <li className="nav-item ms-4">
              <Link href={'/users'}>
                <a className="nav-link">Usuários</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}