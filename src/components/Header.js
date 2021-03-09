import { NavLink } from "react-router-dom"





function Header() {

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-info mx-5">
        <NavLink activeClassName="logoClass" className="navbar-brand" to="">
          <img src="/logo.png" className="logo-1" alt="" />
          <h1 className="text-info">Verbs</h1>
        </NavLink>
        <button
          className="navbar-toggler text-primary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-primary"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink activeClassName="simo" className="nav-link my-link px-3 py-1" to="/conjugation">
                Conjugations
                </NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="simo" className="nav-link my-link px-3 py-1 " to="/translate">
                Translate
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="simo" className="nav-link my-link px-3 py-1" to="/synonyme">
                Synomyme
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="simo " className="nav-link  px-3 py-1 my-link" to="/dictionary">
                Dictionary
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="simo" className="nav-link my-link px-3 py-1" to="/grammar">
                Grammar
                </NavLink>
            </li>


          </ul>
        </div>
      </nav>
      <hr className="my-4"></hr>
    </div>
  );
}

export default Header

