import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from '../../../hooks/useCart';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  //   handle logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire('You loged out successfully!');
        // console.log('User loged out successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>

      <li>
        <Link to="/order">Order Food</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="  normal-case text-xl">Bistro Boss </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="btn">
              <FaCartShopping />
              <div className="badge badge-secondary">{cart.length}</div>
            </button>
          </Link>
          <ul className="menu menu-horizontal px-1 items-center ">
            {user?.email ? (
              <>
                <li>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className=" avatar">
                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </label>
                  </div>
                </li>
                <li>
                  <a onClick={handleSignOut}>Sign Out</a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
