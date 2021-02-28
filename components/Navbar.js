import Link from "next/link";

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="container-fluid">
            <Link href="/">
            <a className="navbar-brand" >
              Simple Portfolio
            </a></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/blog">
                    <a className="nav-link">Blog</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/github">
                    <a className="nav-link">Github</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}
