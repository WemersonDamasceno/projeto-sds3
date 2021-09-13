import ImgDsDark from "assets/img/ds-dark.svg";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5"
function NavBar() {
  return (
    <div className="bg-light border-bottom shadow-sm fixed-top">
      <div className="container">
        <nav className="my-2 row row-cols-2 ">
          <div className="col">
            <Link to="/">
              <img src={ImgDsDark} alt="DevSuperior" width="120" />
            </Link>
          </div>

          <div className="col d-flex justify-content-end">
            <button className="btn btn-light d-flex" onClick={() => alert("Mudar para modo noturno")}>
              <BiMoon fontSize="large" />
            </button>
            <button className="btn btn-light d-flex" onClick={() => alert("Abrir submenu do user")}>
              <IoPersonCircleOutline fontSize="large" />
            </button>
            <p className="my-1">Wemerson</p>
          </div>

        </nav>
      </div>
    </div>
  );
}
export default NavBar;
