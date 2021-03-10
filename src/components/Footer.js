import { Link } from "react-router-dom"


function Footer() {
  const newdate = (new Date()).getFullYear()
  return (
    <div className="footer-section">
      <footer className="">
        <hr className="my-4"></hr>

        <ul className=" m-auto d-flex container">


          <li className="nav-item">
            <Link className="nav-link my-link px-5 py-3 " to="/privacy">
              Privacy Policy
                </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link my-link px-5 py-3" to="/blog">
              Blog
                </Link>
          </li>
          <li className="nav-item">
            <p className="nav-link text-white px-5 py-3 text-info">Copyright ©  2018-{newdate} Verbs-conjugate Company S.L. All rights reserved </p>
          </li>




        </ul>
      </footer>
    </div>
  )
}

export default Footer
